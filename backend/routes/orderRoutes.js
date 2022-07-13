const express = require('express');
const router = express.Router();

const {
  getSummary,
  createOrder,
  capturePayment,
} = require('../controllers/orderController');

router.route('/summary').post(getSummary);

router.route('/create').post(createOrder);

router.route('/:orderID/capture').post(capturePayment);

module.exports = router;
