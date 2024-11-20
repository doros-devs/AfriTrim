import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registrations: {
    lastMonth: 0,
    lastQuarter: 0,
    lastYear: 0,
  },
  topShops: [], // Array of top-performing shops
  lowShops: [], // Array of low-performing shops
  serviceCount: 0, // Total services completed
};

const performanceReportsSlice = createSlice({
  name: "performanceReports",
  initialState,
  reducers: {
    // Action to set all performance report data
    setPerformanceReports(state, action) {
      return { ...state, ...action.payload };
    },
    // Action to update registrations
    updateRegistrations(state, action) {
      state.registrations = { ...state.registrations, ...action.payload };
    },
    // Action to update top-performing shops
    setTopShops(state, action) {
      state.topShops = action.payload;
    },
    // Action to update low-performing shops
    setLowShops(state, action) {
      state.lowShops = action.payload;
    },
    // Action to update service count
    setServiceCount(state, action) {
      state.serviceCount = action.payload;
    },
  },
});

export const {
  setPerformanceReports,
  updateRegistrations,
  setTopShops,
  setLowShops,
  setServiceCount,
} = performanceReportsSlice.actions;

export default performanceReportsSlice.reducer;
