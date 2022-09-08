const mongoose = require('mongoose');

const CustomerBookingModel = require('../model/customerBookingModel');

const addNewBooking = async (req, res) => {
  try {
    const { room, userid, fromdate, todate, totalamount, totaldays } = req.body;
    const addBooking = await new CustomerBookingModel({
      room: room.name,
      roomid: room.id,
      userid: userid,
      fromdate: fromdate,
      todate: todate,
      totalamount: totalamount,
      totaldays: totaldays,
      transactionid: 1234,
    });
    const savedBooking = await addBooking.save();
    res.status(200).json(savedBooking);
  } catch (error) {
    res.status(401).json(error);
  }
};
module.exports = { addNewBooking };
