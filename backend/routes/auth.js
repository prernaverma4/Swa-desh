const express = require('express');
const router = express.Router();
const { register, login, getMe, verifyOTP } = require('../controllers/authController.js');
const { protect } = require('../middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/verify-otp', verifyOTP);

module.exports = router;
