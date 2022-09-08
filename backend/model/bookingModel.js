const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingStatus: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('booking-status', bookingSchema);
