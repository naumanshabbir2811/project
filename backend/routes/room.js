const express = require('express');
const adminRoomController = require('../controllers/adminRoom');
const router = express.Router();
const { upload } = require('../middlewares/storage');
const room = require('../middlewares/room');
const booking = require('../controllers/booking');

router.post(
  '/room/:hotelid',
  upload.single('filename'),
  adminRoomController.addNewRoom
);
router.post('/room/add-booking-status', booking.addNewBookingStatus);

// router.put('/room/id=:id', booking.addNewBooking);

router.get('/room/id=:id', adminRoomController.getRoomById);
// router.get('/room/id=:id', room.checkRoom, adminRoomController.findRoomById);
router.get('/room', adminRoomController.getAllrooms);
router.delete(
  '/room/id=:id',
  room.checkRoom,
  adminRoomController.deleteRoomById
);
module.exports = router;
