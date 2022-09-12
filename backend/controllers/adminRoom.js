const AddRoomModal = require('../model/addRoomModel');
const HotelModel = require('../model/hotelModel');
const addNewRoom = async (req, res, next) => {
  console.log(req.params);
  const hotelId = req.params.hotelid;
  const newRoom = new AddRoomModal(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await HotelModel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getRoomById = async (req, res) => {
  const id = req.params.id;
  const room = await AddRoomModal.findById(id);
  // res.contentType('image/jpg');
  res.status(201).json(room);
};

const findRoomById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const room = await addNewRoom.findById(id);
    res.status(201).json(room);
  } catch (error) {
    res.status(401).json(error);
  }
};

const getAllrooms = async (req, res) => {
  try {
    const rooms = await AddRoomModal.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteRoomById = async (req, res) => {
  const id = req.params.id;
  try {
    await AddRoomModal.findByIdAndDelete(id);
    res
      .status(201)
      .json({ message: 'Room deleted', id, deletedAt: Date.now() });
  } catch (error) {}
};

const updateRoom = async (req, res) => {
  try {
    const updatedCustomer = await AddRoomModal.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json({ updatedCustomer });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addNewRoom,
  getRoomById,
  getAllrooms,
  deleteRoomById,
  findRoomById,
};
