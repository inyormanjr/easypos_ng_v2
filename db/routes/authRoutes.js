const express = require('express');
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  confirmRegistration
} = require('../controllers/authController');


const router = express.Router();

const { protect } = require('../middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router
  .get('/getMe', protect, getMe);
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword/:resetToken', resetPassword);
router.route('/confirmRegistration/:confirmationCode').get(confirmRegistration);

module.exports = router;
