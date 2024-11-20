import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // Array of data for the pie chart
};

const pieChartSlice = createSlice({
  name: "pieChart",
  initialState,
  reducers: {
    // Action to set the data for the pie chart
    setPieChartData(state, action) {
      state.data = action.payload;
    },
    // Action to update a specific slice of the pie chart
    updatePieSlice(state, action) {
      const { index, value } = action.payload;
      if (state.data[index]) {
        state.data[index].value = value;
      }
    },
  },
});

export const { setPieChartData, updatePieSlice } = pieChartSlice.actions;

export default pieChartSlice.reducer;
