const express = require('express');

const customerController = require('../controllers/customer');
const customerValidate = require('../middlewares/customerValidate');
const router = express.Router();
const adminValidate = require('../middlewares/adminValidation');

router.post('/customer/signup', customerController.addNewCustomer);
router.post('/customer/signin', customerController.signInCustomer);
router.put(
  '/customer',
  customerValidate.customerValidate,
  customerController.updateCustomer
);
router.delete(
  '/customer',
  customerValidate.customerValidate,
  customerController.deleteCustomer
);
router.get(
  '/customer',
  adminValidate.adminValidate,
  customerController.getAllCustomers
);
module.exports = router;
