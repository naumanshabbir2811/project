const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth');
router.post('/adduser', authController.addUser);
router.post('/signin', authController.signInAdmin);
module.exports = router;
