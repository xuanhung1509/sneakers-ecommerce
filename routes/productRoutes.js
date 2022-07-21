const express = require('express');
const router = express.Router();
const {
  getFeaturedProducts,
  getProductsByCategory,
  getSingleProduct,
} = require('../controllers/productController');

router.route('/featured').get(getFeaturedProducts);

router.route('/:categoryName').get(getProductsByCategory);

router.route('/:categoryName/:productId').get(getSingleProduct);

module.exports = router;
