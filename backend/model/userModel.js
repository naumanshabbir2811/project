const mongoose = require('mongoose');
require('mongoose-type-email');
const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('user', UserSchema);
