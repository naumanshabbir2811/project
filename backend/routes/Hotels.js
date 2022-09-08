const express = require('express');

const router = express.Router();
const hotelController = require('../controllers/hotel');

router.post('/hotel', hotelController.addNewHotel);
router.put('/hotel/id', hotelController.updateHotelById);
module.exports = router;
