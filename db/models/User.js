const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
  mongoose
    .connect(require("../connection-config.js"), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.error("mongoose Error", err);
    });



let UserSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  role: {
    type: String,
    enum: ["Owner", "Cashier"],
    default: "Owner",
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre('save', async function (next) {
  this.updatedAt = Date.now();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

UserSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

UserSchema.methods.getSignJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.matchConfirmationCode = async function (enteredCode) {
  return (await enteredCode) == this.confirmationCode;
};

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  return resetToken;
};


/** @name db.User */
module.exports = mongoose.model('User', UserSchema);
