const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  cnic: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
});
module.exports = mongoose.model('Customer', CustomerSchema);
