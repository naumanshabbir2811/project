const UserModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const addUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hashSync(req.body.password, 6);
    const newUser = await UserModel({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

const signInAdmin = async (req, res) => {
  try {
    const admin = await UserModel.findOne({ email: req.body.email });
    if (!admin) {
      res.status(401).json({ message: 'Admin does not exist' });
      return;
    }
    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      admin.password
    );
    if (!isValidPassword) {
      res.status(404).json('password does not matched');
      return;
    }
    const token = jwt.sign(
      {
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      }
    );
    res.status(201).json({ message: 'Admin Signed in', token });
  } catch (error) {
    res.status(401).json(error);
  }
};
module.exports = { addUser, signInAdmin };
