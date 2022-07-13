const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    discountedPrice: {
      type: Number,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    featured: {
      type: Boolean,
    },
    banner: {
      desktop: { type: String },
      mobile: { type: String },
    },
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
