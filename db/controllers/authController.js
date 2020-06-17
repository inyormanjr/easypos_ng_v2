
const ErrorResponse = require('../utils/errorResponse');
const crypto = require('crypto');
const asyncHandler = require('../middlewares/async');
const sendEmail = require('../utils/sendEmail');
const User = require('../models/user');

//@desc     Register User
//@route    GET /api/v1/auth/register
//@access   public
exports.register = asyncHandler(async (req, res, next) => {
    const newUser = req.body;
    const confirmationCode = crypto.randomBytes(5).toString('hex');
    newUser.confirmationCode = confirmationCode;

    const user = await User.create(newUser);

    const confirmationUrl = `${req.protocol}://${req.get(
      'host'
    )}#/confirmRegistration/${user.confirmationCode}`;
    const message = `Congratulations on creating a new account in our MiLeague App, to finalize your
                        registration, please click the link below for email confirmation.
                         \n\n ${confirmationUrl}`;

    await sendEmail({
      email: user.username,
      subject: 'MiLeague New Account confirmation',
      message,
    });

    res.json({
        success: true,
        message: `Email confirmation has been sent to ${user.username}.`
    })
});

exports.confirmRegistration = asyncHandler(async (req, res, next) => {
    const confirmationCode = req.params.confirmationCode;
    console.log(confirmationCode);
    const user = await User.findOne({ confirmationCode });
    console.log(user);
    if (user == undefined) {
             return next(new ErrorResponse('No user found with confirmation code provided.', 401));
    }

      const isMatch = await user.matchConfirmationCode(confirmationCode);
      if (!isMatch) {
        return next(new ErrorResponse('Invalid confirmation code', 401));
    }
    user.confirmationCode = undefined;
    user.save();
    sendTokenResponse(user, 200, res);
});


//@desc     Login User
//@route    GET /api/v1/auth/login
//@access   public
exports.login = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return next(new ErrorResponse('Please provide username/password', 400));
    }

    const user = await User.findOne({ username }).select('+password');
    if (!user) {
        return next(
            new ErrorResponse('Invalid credentials', 401)
         );
    }

    if (user.confirmationCode != undefined) {
         return next(new ErrorResponse('Email confirmation required.', 401));
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
         return next(new ErrorResponse('Invalid credentials', 401));
    }
    const returnUser = await User.findOne({ username });
    sendTokenResponse(returnUser, 200, res)
});

const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res.status(statusCode)
        .cookie('token', token, options)
        .json({ success: true, token, data: user});
}

exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        data: user
    })
})

exports.resetPassword = asyncHandler(async (req, res, next) => {

    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resetToken)
      .digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
        return next(new ErrorResponse('Invalid token', 400));
    }
    if (req.body.password == undefined) {
        return res.json({
            success: true,
            message: 'password token valid'
        });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({validateBeforeSave: false});
    sendTokenResponse(user, 200, res);
});


exports.forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
        return next(new ErrorResponse('There is no user with that username', 404));
    }

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${req.protocol}://${req.get('host')}#/changepassword/${resetToken}`;
    const message = `You are recieving this email because you has requested the reset of a password. Please
                        make a put request to: \n\n ${resetUrl}`;

    try {
        await sendEmail({
            email: user.username,
            subject: 'Password reset token',
            message

        });
        res.status(200).json({ success: true, data: 'Email Sent' });
    } catch (error) {
        console.log(error);
        user.userPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new ErrorResponse('Email could not be sent.',500))
    }
    res.status(200).json({
        success: true,
        data: user
    })
})
