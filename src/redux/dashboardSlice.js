// src/redux/dashboardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeContent: "analytics", // Default active content is 'analytics'
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setActiveContent: (state, action) => {
      state.activeContent = action.payload;
    },
  },
});

export const { setActiveContent } = dashboardSlice.actions;

export default dashboardSlice.reducer;
