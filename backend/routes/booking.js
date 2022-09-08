const express = require('express');

const CustomerBooking = require('../controllers/customerBooking');
const router = express.Router();
router.post('/room/booking', CustomerBooking.addNewBooking);

module.exports = router;
