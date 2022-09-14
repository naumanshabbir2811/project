const express = require('express');

const router = express.Router();
const hotelController = require('../controllers/hotel');
const adminValidation = require('../middlewares/adminValidation');

router.post(
  '/hotel',
  adminValidation.adminValidate,
  hotelController.addNewHotel
);
router.put(
  '/hotel/id=:id',
  adminValidation.adminValidate,
  hotelController.updateHotelById
);
router.delete(
  '/hotel/id=:id',
  adminValidation.adminValidate,
  hotelController.deleteHotelById
);
router.get('/hotel', hotelController.getAllHotels);
router.get('/hotels', hotelController.getAllFeaturedHotels);
router.get('/hotel/countbycity', hotelController.getHotelByCity);
router.get('/hotel/countbytype', hotelController.countByType);
router.get('/room/:id,hotelController.getHotelsRoom');
module.exports = router;
