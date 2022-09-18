const jwt = require('jsonwebtoken');

const customerValidate = (req, res, next) => {
  try {
    const token = req.headers.customer_token;
    // console.log(token);
    if (!token) {
      res.status(401).json({ message: 'Please Authenticate' });
      return;
    }
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.customer = data;
    next();
    // res.status(201).json({ message: 'authenticated' });
  } catch (error) {
    res.status(501).json(error);
  }
};
module.exports = { customerValidate };
