const mongoose = require('mongoose');

const AddRoomSchema = mongoose.Schema({
  RoomName: {
    type: String,
    // required: true,
    // min: 10,
    // unique: true,
  },
  RoomType: {
    type: String,
    // required: true,
  },
  RoomImage: {
    type: [String],
    // required: true,
    trim: true,
  },
  RoomFloor: {
    type: Number,
    // required: true,
  },
  RoomFacilites: {
    type: String,
    // required: true,
  },
  RoomNumber: [{ number: Number, unavailableDates: [{ type: Date }] }],
  RoomPrice: {
    type: Number,
  },
  RoomCapacity: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('AddRoom', AddRoomSchema);
