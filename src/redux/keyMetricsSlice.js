import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  metrics: [], // Array to store the key metrics
};

const keyMetricsSlice = createSlice({
  name: "keyMetrics",
  initialState,
  reducers: {
    // Action to set the metrics data
    setMetrics(state, action) {
      state.metrics = action.payload;
    },
    // Action to update a specific metric
    updateMetric(state, action) {
      const { index, newMetric } = action.payload;
      if (state.metrics[index]) {
        state.metrics[index] = { ...state.metrics[index], ...newMetric };
      }
    },
  },
});

export const { setMetrics, updateMetric } = keyMetricsSlice.actions;

export default keyMetricsSlice.reducer;
