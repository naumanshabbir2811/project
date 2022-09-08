const BookingStatusModel = require('../model/bookingModel');

const addNewBookingStatus = async (req, res) => {
  try {
    const newBookingStatus = new BookingStatusModel({
      bookingStatus: req.body.bookingStatus,
    });
    const newStatus = await newBookingStatus.save();
    res.status(200).json(newStatus);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { addNewBookingStatus };
