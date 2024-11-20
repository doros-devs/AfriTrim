import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedReport: "overview",
  revenueData: [
    { month: "Jan", revenue: 50000 },
    { month: "Feb", revenue: 60000 },
    { month: "Mar", revenue: 70000 },
    { month: "Apr", revenue: 80000 },
    { month: "May", revenue: 90000 },
  ],
  barbershopData: [
    { name: "Downtown Cuts", revenue: 15000, services: 200 },
    { name: "Uptown Styles", revenue: 12000, services: 180 },
    { name: "Suburb Trims", revenue: 10000, services: 150 },
    { name: "Elite Groomers", revenue: 8000, services: 120 },
    { name: "Budget Barbers", revenue: 5000, services: 80 },
  ],
  registrations: {
    lastMonth: 20,
    lastQuarter: 50,
    lastYear: 200,
  },
  feedback: [
    "Great service, very professional!",
    "Needs improvement in appointment scheduling.",
    "Staff was very friendly and efficient.",
    "Pricing could be more competitive.",
  ],
  metrics: [
    { title: "Total Barbershops", value: "150" },
    { title: "Lifetime Sales", value: "$1,200,000" },
    { title: "Customer Retention Rate", value: "85%" },
    { title: "Average Service Time", value: "30 mins" },
    { title: "Top Service Category", value: "Haircuts" },
  ],
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setSelectedReport(state, action) {
      state.selectedReport = action.payload;
    },
    updateRevenueData(state, action) {
      state.revenueData = action.payload;
    },
    updateBarbershopData(state, action) {
      state.barbershopData = action.payload;
    },
    updateRegistrations(state, action) {
      state.registrations = action.payload;
    },
    updateFeedback(state, action) {
      state.feedback = action.payload;
    },
    updateMetrics(state, action) {
      state.metrics = action.payload;
    },
  },
});

export const {
  setSelectedReport,
  updateRevenueData,
  updateBarbershopData,
  updateRegistrations,
  updateFeedback,
  updateMetrics,
} = reportSlice.actions;

export default reportSlice.reducer;
