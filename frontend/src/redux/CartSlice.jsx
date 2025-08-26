import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts:[], 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
    const product = action.payload;
      const existing = state.cartProducts.find((p) => p._id === product._id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cartProducts.push({ ...product, quantity: 1 });
  }
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