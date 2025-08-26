import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000/pay";

//
export const createOrder = createAsyncThunk(
  "payment/createOrder",
  async ({ userId, products, totalPrice, paymentMethod, token }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "/newOrder",
        { userId, products, totalPrice, paymentMethod, status: "Pending" },
        { baseURL: BASE_URL, headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: "Order failed" });
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: { loading: false, error: null, order: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload.order;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Order failed";
      });
  },
});

export default paymentSlice.reducer;