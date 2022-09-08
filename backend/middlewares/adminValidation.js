const jwt = require('jsonwebtoken');

const adminValidate = (req, res, next) => {
  try {
    const token = req.headers.auth_token;
    console.log(token);
    if (!token) {
      res.status(401).json({ message: 'not Authorized' });
      return;
    }
    next();
  } catch (error) {
    res.status(406).json(error);
  }
};

module.exports = { adminValidate };
