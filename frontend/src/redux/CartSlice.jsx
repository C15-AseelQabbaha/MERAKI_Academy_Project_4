import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts:[], 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item._id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;