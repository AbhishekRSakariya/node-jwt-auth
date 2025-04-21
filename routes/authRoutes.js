const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { register, login, getProfile } = require('../middlewares/authController');
const auth = require('../controllers/auth');


router.post(
  '/register',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  register
);


router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  login
);


router.get('/profile', auth, getProfile);

module.exports = router;