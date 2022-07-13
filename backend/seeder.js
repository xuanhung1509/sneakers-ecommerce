const { products } = require('./data/sample');
const Product = require('./models/productModel');
const connectDB = require('./config/db');
require('dotenv').config();
require('colors');

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);
    console.log('Products imported!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log('Products destroyed!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
