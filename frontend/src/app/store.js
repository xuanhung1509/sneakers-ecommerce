import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
      userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
      isOrderSuccess: false,
    },
  },
});

const saveToLocalStorage = (state) => {
  const { cartItems, userInfo } = state.cart;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

store.subscribe(() => saveToLocalStorage(store.getState()));
