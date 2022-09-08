const HotelModel = require('../model/hotelModel');

const addNewHotel = async (req, res) => {
  try {
    const newHotel = new HotelModel(req.body);
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateHotelById = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedHotel = await HotelModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { addNewHotel, updateHotelById };
