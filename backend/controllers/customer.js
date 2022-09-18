const CustomerModel = require('../model/customerModel');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const addNewCustomer = async (req, res) => {
  const hashedPassord = bycrypt.hashSync(req.body.password, 6);
  try {
    const newCustomer = await CustomerModel({
      firstName: req.body.firstName,
      lastName: req.body.firstName,
      email: req.body.email,
      password: hashedPassord,
      cnic: req.body.cnic,
      phone: req.body.phone,
      address: req.body.address,
      avatar: req.file.filename,
    });
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(400).json(error);
  }
};
const signInCustomer = async (req, res) => {
  try {
    const customer = await CustomerModel.findOne({
      email: req.body.email,
    });
    if (!customer) {
      res.status(400).json({ message: 'Customer not found' });
      return;
    }
    const isValidPassword = bycrypt.compareSync(
      req.body.password,
      customer.password
    );
    if (!isValidPassword) {
      res.status(402).json({ message: 'password does not matched' });
      return;
    }
    const token = jwt.sign(
      {
        email: customer.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      }
    );
    res.status(201).json({ message: 'User Signed In', token });
  } catch (error) {
    res.status(401).json(error);
  }
};

const updateCustomer = async (req, res) => {
  console.log(req.customer.email);
  const email = req.customer.email;
  try {
    const updatedCustomer = await CustomerModel.findOneAndUpdate(
      email,
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
const deleteCustomer = async (req, res) => {
  console.log(req.customer.email);
  const email = req.customer.email;

  try {
    await CustomerModel.findOneAndDelete({ email });
    res.status(200).send('Successfully deleted the customer');
  } catch (error) {
    res.status(404).json(error);
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await CustomerModel.find();
    res.status(200).json(allCustomers);
  } catch (error) {
    res.status(404).json(error);
  }
};

const getCustomerInfo = async (req, res) => {
  const token = req.headers.customer_token;
  console.log(token);
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = user;
    const customerInfo = await CustomerModel.findOne({ email });
    res.status(201).json(customerInfo);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  addNewCustomer,
  signInCustomer,
  updateCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomerInfo,
};
