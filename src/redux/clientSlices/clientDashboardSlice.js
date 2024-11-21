import { createSlice } from "@reduxjs/toolkit";

// Initial state for the dashboard
const initialState = {
  activeTab: "search",
  search: "",
  selectedShop: null,
  selectedService: null,
  barber: "",
  appointmentDetails: null,
  paymentInitialized: false,
  messages: [],
  appointments: [],
  selectedAppointment: null, // New state to track the selected appointment
};

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
      state.selectedService = null;
      state.barber = "";
    },
    setSelectedService: (state, action) => {
      state.selectedService = action.payload.name;
      state.barber = action.payload.barber;
    },
    setAppointmentDetails: (state, action) => {
      state.appointmentDetails = action.payload;
      state.paymentInitialized = true;
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
      state.appointments = [];
      state.selectedAppointment = null; // Reset selected appointment
    },
    setAppointments: (state, action) => {
      state.appointments = action.payload;
    },
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    cancelAppointment: (state, action) => {
      state.appointments = state.appointments.filter(
        (appointment) => appointment.id !== action.payload
      );
    },
    setSelectedAppointment: (state, action) => {
      state.selectedAppointment = action.payload; // Set selected appointment
    },
  },
});

export const {
  setActiveTab,
  setSearch,
  setSelectedShop,
  setSelectedService,
  setAppointmentDetails,
  setPaymentInitialized,
  addMessage,
  resetState,
  setAppointments,
  addAppointment,
  cancelAppointment,
  setSelectedAppointment, // Export the new action
} = clientDashboardSlice.actions;

export default clientDashboardSlice.reducer;
