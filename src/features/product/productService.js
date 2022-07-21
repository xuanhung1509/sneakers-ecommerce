import axios from 'axios';
const API_URL = process.env.REACT_APP_PRODUCT_API_URL;

const getFeaturedProducts = async () => {
  const { data } = await axios.get(`${API_URL}/featured`);
  return data;
};

const getProductsByCategory = async (categoryName) => {
  const { data } = await axios.get(`${API_URL}/${categoryName}`);
  return data;
};

const getSingleProduct = async (categoryName, productId) => {
  const { data } = await axios.get(`${API_URL}/${categoryName}/${productId}`);
  return data;
};

const productService = {
  getFeaturedProducts,
  getProductsByCategory,
  getSingleProduct,
};

export default productService;
