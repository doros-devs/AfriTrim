// src/redux/landingPageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
  paymentSuccessful: false,
  mpesaNumber: "",
  amount: "",
  paymentConfirmed: false,
  formStep: 1,
  loading: false,
  showProfileEdit: false,
};

const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    toggleShowForm: (state) => {
      state.showForm = !state.showForm;
    },
    setPaymentSuccessful: (state, action) => {
      state.paymentSuccessful = action.payload;
    },
    setMpesaNumber: (state, action) => {
      state.mpesaNumber = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setPaymentConfirmed: (state, action) => {
      state.paymentConfirmed = action.payload;
    },
    setFormStep: (state, action) => {
      state.formStep = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    toggleProfileEdit: (state) => {
      state.showProfileEdit = !state.showProfileEdit;
    },
  },
});

export const {
  toggleShowForm,
  setPaymentSuccessful,
  setMpesaNumber,
  setAmount,
  setPaymentConfirmed,
  setFormStep,
  setLoading,
  toggleProfileEdit,
} = landingPageSlice.actions;

export default landingPageSlice.reducer;
