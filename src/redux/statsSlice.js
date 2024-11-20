import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stats: [
    { id: 1, title: "Total Revenue", value: "$250,000" },
    { id: 2, title: "Monthly Revenue", value: "$20,000" },
    { id: 3, title: "Quarterly Revenue", value: "$60,000" },
    { id: 4, title: "Average Sales Per Shop", value: "$1,500" },
  ],
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    updateStat(state, action) {
      const { id, newValue } = action.payload;
      const stat = state.stats.find((stat) => stat.id === id);
      if (stat) {
        stat.value = newValue;
      }
    },
    addStat(state, action) {
      state.stats.push(action.payload);
    },
    removeStat(state, action) {
      const statId = action.payload;
      state.stats = state.stats.filter((stat) => stat.id !== statId);
    },
  },
});

export const { updateStat, addStat, removeStat } = statsSlice.actions;

export default statsSlice.reducer;
