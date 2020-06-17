const mongoose = require('mongoose');
const Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });



let StoreSchema = new Schema({

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

StoreSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

StoreSchema.pre('update', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});

StoreSchema.pre('findOneAndUpdate', function () {
    this.constructor.update({_id: this._id}, { $set: { updatedAt: Date.now() } });
});



/** @name db.Store */
module.exports = mongoose.model('Store', StoreSchema);
