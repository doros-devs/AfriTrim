import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  revenueData: [
    { date: "Jan", income: 5000 },
    { date: "Feb", income: 7000 },
    { date: "Mar", income: 6000 },
    { date: "Apr", income: 8000 },
    { date: "May", income: 7500 },
    { date: "Jun", income: 8200 },
  ],
  barbershopData: [
    { id: 1, name: "Sharp Cuts", revenue: 25000 },
    { id: 2, name: "The Grooming Lounge", revenue: 22000 },
    { id: 3, name: "Fade Masters", revenue: 19000 },
    { id: 4, name: "Elite Clippers", revenue: 18000 },
    { id: 5, name: "Classic Styles", revenue: 15000 },
  ],
};

const salesOverviewSlice = createSlice({
  name: "salesOverview",
  initialState,
  reducers: {
    updateRevenueData(state, action) {
      state.revenueData = action.payload;
    },
    updateBarbershopData(state, action) {
      state.barbershopData = action.payload;
    },
  },
});

export const { updateRevenueData, updateBarbershopData } =
  salesOverviewSlice.actions;

export default salesOverviewSlice.reducer;
