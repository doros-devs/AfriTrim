import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  barbers: [],
};

const barbersPerformanceSlice = createSlice({
  name: "barbersPerformance",
  initialState,
  reducers: {
    // Set the initial or updated list of barbers
    setBarbers(state, action) {
      state.barbers = action.payload;
    },
    // Update a specific barber's data
    updateBarber(state, action) {
      const updatedBarber = action.payload;
      const index = state.barbers.findIndex((b) => b.id === updatedBarber.id);
      if (index !== -1) {
        state.barbers[index] = { ...state.barbers[index], ...updatedBarber };
      }
    },
  },
});

export const { setBarbers, updateBarber } = barbersPerformanceSlice.actions;

export default barbersPerformanceSlice.reducer;
