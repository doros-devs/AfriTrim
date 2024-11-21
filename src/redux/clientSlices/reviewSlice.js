// reviewSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the review form
const initialState = {
  reviewText: "",
  rating: 0,
  isFormValid: true,
  isSubmitted: false,
};

// Create the review slice
const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviewText: (state, action) => {
      state.reviewText = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setFormValidity: (state, action) => {
      state.isFormValid = action.payload;
    },
    setIsSubmitted: (state, action) => {
      state.isSubmitted = action.payload;
    },
    resetReviewState: (state) => {
      state.reviewText = "";
      state.rating = 0;
      state.isFormValid = true;
      state.isSubmitted = false;
    },
  },
});

// Export actions
export const {
  setReviewText,
  setRating,
  setFormValidity,
  setIsSubmitted,
  resetReviewState,
} = reviewSlice.actions;

// Export reducer
export default reviewSlice.reducer;
