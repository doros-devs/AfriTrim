import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedReport: "overview", // Default selected report
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSelectedReport(state, action) {
      state.selectedReport = action.payload;
    },
  },
});

export const { setSelectedReport } = sidebarSlice.actions;

export default sidebarSlice.reducer;
