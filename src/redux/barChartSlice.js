import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const barChartSlice = createSlice({
  name: "barChart",
  initialState,
  reducers: {
    setChartData(state, action) {
      state.data = action.payload; // Set the chart data
    },
    updateChartData(state, action) {
      const updatedData = action.payload;
      const index = state.data.findIndex((item) => item.date === updatedData.date);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updatedData };
      }
    },
  },
});

export const { setChartData, updateChartData } = barChartSlice.actions;

export default barChartSlice.reducer;
