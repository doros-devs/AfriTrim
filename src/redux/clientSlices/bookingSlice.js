// bookingSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  selectedBarber: "",
  appointmentDate: "",
  appointmentTime: "",
  appointmentBooked: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setSelectedBarber: (state, action) => {
      state.selectedBarber = action.payload;
    },
    setAppointmentDate: (state, action) => {
      state.appointmentDate = action.payload;
    },
    setAppointmentTime: (state, action) => {
      state.appointmentTime = action.payload;
    },
    bookAppointment: (state) => {
      state.appointmentBooked = true;
    },
    cancelAppointment: (state) => {
      state.phone = "";
      state.selectedBarber = "";
      state.appointmentDate = "";
      state.appointmentTime = "";
      state.appointmentBooked = false;
    },
  },
});

// Export actions
export const {
  setPhone,
  setSelectedBarber,
  setAppointmentDate,
  setAppointmentTime,
  bookAppointment,
  cancelAppointment,
} = bookingSlice.actions;

// Export the reducer
export default bookingSlice.reducer;
