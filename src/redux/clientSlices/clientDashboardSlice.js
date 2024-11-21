// clientDashboardSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the dashboard
const initialState = {
  activeTab: "search", // Current active tab in the UI
  search: "", // Search query for shops
  selectedShop: null, // The selected shop
  selectedService: null, // The selected service
  barber: "", // The selected barber
  appointmentDetails: null, // Appointment details after booking
  paymentInitialized: false, // Whether the payment process is initialized
  messages: [], // Messages for the chat
};

// Create slice
const clientDashboardSlice = createSlice({
  name: "clientDashboard",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSelectedShop: (state, action) => {
      state.selectedShop = action.payload;
      state.selectedService = null; // Reset service selection
      state.barber = ""; // Reset barber selection
    },
    setSelectedService: (state, action) => {
      state.selectedService = action.payload.name;
      state.barber = action.payload.barber;
    },
    setAppointmentDetails: (state, action) => {
      state.appointmentDetails = action.payload;
      state.paymentInitialized = true; // Initialize payment process after booking
    },
    setPaymentInitialized: (state, action) => {
      state.paymentInitialized = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    resetState: (state) => {
      state.activeTab = "search";
      state.search = "";
      state.selectedShop = null;
      state.selectedService = null;
      state.barber = "";
      state.appointmentDetails = null;
      state.paymentInitialized = false;
      state.messages = [];
    },
  },
});

// Export actions
export const {
  setActiveTab,
  setSearch,
  setSelectedShop,
  setSelectedService,
  setAppointmentDetails,
  setPaymentInitialized,
  addMessage,
  resetState,
} = clientDashboardSlice.actions;

// Export reducer
export default clientDashboardSlice.reducer;
