import { createAction, createSlice } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/addToCart');
export const changeQty = createAction('cart/changeQty');
export const removeFromCart = createAction('cart/removeFromCart');
export const saveUserInfo = createAction('cart/saveUserInfo');
export const markOrderSuccess = createAction('cart/markOrderSuccess');
export const clearCart = createAction('cart/clearCart');

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartItems: [], userInfo: {}, isOrderSuccess: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart, (state, action) => {
        const { product, qty } = action.payload;

        const itemInCart = state.cartItems.find(
          (item) => item._id === product._id
        );

        if (itemInCart) {
          itemInCart.qty += qty;
        } else {
          state.cartItems.push({ ...product, qty });
        }
      })
      .addCase(changeQty, (state, action) => {
        const { productId, newQty } = action.payload;

        state.cartItems = state.cartItems.map((item) =>
          item._id === productId ? { ...item, qty: +newQty } : item
        );
      })
      .addCase(removeFromCart, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(saveUserInfo, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(markOrderSuccess, (state, action) => {
        state.isOrderSuccess = action.payload;
      })
      .addCase(clearCart, (state, action) => {
        state.cartItems = [];
      });
  },
});

export default cartSlice.reducer;
