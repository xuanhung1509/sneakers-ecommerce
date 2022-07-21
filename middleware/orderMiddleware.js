const axios = require('axios');
const Product = require('../models/productModel');

const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, SHIPPING_FEE } = process.env;

const base = 'https://api-m.sandbox.paypal.com';

const generateAccessToken = async () => {
  const { data } = await axios({
    url: base + '/v1/oauth2/token',
    method: 'POST',
    data: 'grant_type=client_credentials',
    auth: {
      username: PAYPAL_CLIENT_ID,
      password: PAYPAL_APP_SECRET,
    },
  });
  return data.access_token;
};

const createPaypalOrder = async (total) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const { data } = await axios({
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: total,
          },
        },
      ],
    },
  });
  return data;
};

const capturePaypalPayment = async (orderID) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;
  const { data } = await axios({
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

const calcTotalPrice = async (orderData) => {
  let subtotal = 0;
  for (const item of orderData) {
    const product = await Product.findById(item._id);
    const price = (product.discountedPrice ?? product.regularPrice) * item.qty;
    subtotal += price;
  }
  return {
    subtotal: subtotal.toFixed(2),
    shippingFee: (+SHIPPING_FEE).toFixed(2),
    total: (subtotal + +SHIPPING_FEE).toFixed(2),
  };
};

module.exports = {
  createPaypalOrder,
  capturePaypalPayment,
  calcTotalPrice,
};
