// src/redux/profileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "123-456-7890",
  avatar: "", // Profile picture URL or base64 string
  services: "", // Services offered
  location: "", // Location
  openingHours: "", // Opening and Closing hours
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateProfileField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetProfile: () => initialState,
  },
});

export const { setProfile, updateProfileField, resetProfile } =
  profileSlice.actions;

export default profileSlice.reducer;
