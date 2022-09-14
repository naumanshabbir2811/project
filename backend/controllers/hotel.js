const HotelModel = require('../model/hotelModel');
const RoomModel = require('../model/addRoomModel');
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
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteHotelById = async (req, res) => {
  const id = req.params.id;
  try {
    await HotelModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'DELETED' });
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllHotels = async (req, res) => {
  try {
    const allHotels = await HotelModel.find();
    res.status(200).json(allHotels);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getAllFeaturedHotels = async (req, res) => {
  const { min, max, ...others } = req.query;
  try {
    const allHotels = await HotelModel.find({
      ...others,
      cheapestPrice: { $gt: min | 8000, $lt: max || 20000 },
    }).limit(req.query.limit);
    res.status(200).json(allHotels);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getHotelByCity = async (req, res, next) => {
  console.log(req.query);
  const cities = req.query.cities.split(',');
  try {
    const list = await Promise.all(
      cities.map(city => {
        return HotelModel.countDocuments({ city: city });
      })
    );
    res.status(201).json(list);
  } catch (error) {
    next(error);
  }
};

const countByType = async (req, res, next) => {
  try {
    const hotelCount = await HotelModel.estimatedDocumentCount();
    const appartmentCount = await HotelModel.countDocuments({
      type: 'appartment',
    });
    const resortCount = await HotelModel.countDocuments({ type: 'resort' });
    const villaCount = await HotelModel.countDocuments({ type: 'villa' });
    // const islandCount = await HotelModel.countDocuments({ type: 'island' });
    console.log(hotelCount);
    res.status(200).json([
      { type: 'hotel', count: hotelCount },
      { type: 'appartment', count: appartmentCount },
      { type: 'resort', count: resortCount },
      { type: 'villa', count: villaCount },
      // { type: 'Island', count: islandCount },
    ]);
  } catch (error) {
    res.status(400).json(error);
    next();
  }
};

const getHotelsRoom = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map(room => {
        return RoomModel.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  addNewHotel,
  updateHotelById,
  deleteHotelById,
  getAllHotels,
  getHotelByCity,
  countByType,
  getHotelsRoom,
  getAllFeaturedHotels,
};
