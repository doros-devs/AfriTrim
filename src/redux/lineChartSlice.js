import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // Array to store the line chart data
};

const lineChartSlice = createSlice({
  name: "lineChart",
  initialState,
  reducers: {
    // Action to set the line chart data
    setLineChartData(state, action) {
      state.data = action.payload;
    },
    // Action to update a specific data point
    updateDataPoint(state, action) {
      const { date, newData } = action.payload;
      const index = state.data.findIndex((point) => point.date === date);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...newData };
      }
    },
  },
});

export const { setLineChartData, updateDataPoint } = lineChartSlice.actions;

export default lineChartSlice.reducer;
