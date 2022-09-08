const mongoose = require('mongoose');

const customerBookingSchema = mongoose.Schema({
  room: {
    type: mongoose.Types.ObjectId,
    ref: 'AddRoom',
  },
  roomid: {
    type: String,
  },
  userid: {
    type: String,
  },
  fromdate: {
    type: String,
  },
  todate: {
    type: String,
  },
  totalamount: {
    type: Number,
  },
  totaldays: {
    type: Number,
  },
  transactionid: {
    type: String,
  },
  status: {
    type: String,
    default: 'Booked',
  },
});
module.exports = mongoose.model('CustomerBooking', customerBookingSchema);
