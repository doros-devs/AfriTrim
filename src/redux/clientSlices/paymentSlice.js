// paymentSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for payment
const initialState = {
  amount: "", // Payment amount
  phone: "", // Phone number to receive payment
  paymentStatus: "idle", // idle, processing, completed, failed
  paymentResult: null, // Result message (success, failure, etc.)
};

// Create slice
const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPaymentStatus: (state, action) => {
      state.paymentStatus = action.payload;
    },
    setPaymentResult: (state, action) => {
      state.paymentResult = action.payload;
    },
    resetPaymentState: (state) => {
      state.amount = "";
      state.phone = "";
      state.paymentStatus = "idle";
      state.paymentResult = null;
    },
  },
});

// Export actions
export const {
  setAmount,
  setPhone,
  setPaymentStatus,
  setPaymentResult,
  resetPaymentState,
} = paymentSlice.actions;

// Export reducer
export default paymentSlice.reducer;
