const AddRoomModal = require('../model/addRoomModel');

const checkRoom = async (req, res, next) => {
  try {
    const room = await AddRoomModal.findById(req.params.id);
    if (!room) {
      res.status(404).json({ message: 'room does not exist' });
      return;
    }
    req.room = room;
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { checkRoom };
