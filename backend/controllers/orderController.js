const asyncHandler = require('express-async-handler');
const {
  calcTotalPrice,
  createPaypalOrder,
  capturePaypalPayment,
} = require('../middleware/orderMiddleware');

// @desc    Get summary (subtotal & shipping)
// @route   POST /api/orders/summary
// @access  Public
const getSummary = asyncHandler(async (req, res) => {
  const orderData = req.body;
  const { subtotal, shippingFee, total } = await calcTotalPrice(orderData);
  res.status(200).json({ subtotal, shippingFee, total });
});

// @desc    Create order
// @route   POST /api/orders/create
// @access  Public
const createOrder = asyncHandler(async (req, res) => {
  const orderData = req.body;
  const { total } = await calcTotalPrice(orderData);
  const order = await createPaypalOrder(total);
  res.status(201).json(order);
});

// @desc    Capture payment
// @route   POST /api/orders/:orderID/capture
// @access  Public
const capturePayment = async (req, res) => {
  const { orderID } = req.params;

  const captureData = await capturePaypalPayment(orderID);
  res.status(201).json(captureData);
};

module.exports = {
  getSummary,
  createOrder,
  capturePayment,
};
