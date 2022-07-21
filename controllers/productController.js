const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @desc    Get featured products
// @route   GET /api/products/featured
// @access  Public
const getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json(products);
});

// @desc    Get products by category
// @route   GET /api/products/:categoryName
// @access  Public
const getProductsByCategory = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: req.params.categoryName });
  res.status(200).json(products);
});

// @desc    Get single product
// @route   GET /api/products/:categoryName/:productId
// @access  Public
const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
});

module.exports = {
  getFeaturedProducts,
  getProductsByCategory,
  getSingleProduct,
};
