// src/redux/barberSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  barbers: [],
  loading: true,
  barChartData: {
    labels: [],
    datasets: [
      {
        label: "Total Revenue ($)",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        borderRadius: 5,
      },
      {
        label: "Completed Appointments",
        data: [],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderRadius: 5,
      },
    ],
  },
  pieChartData: {
    labels: ["Completed", "Pending", "Canceled"],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  },
};

const barberSlice = createSlice({
  name: "barbers",
  initialState,
  reducers: {
    setBarbers: (state, action) => {
      const barbers = action.payload;
      state.barbers = barbers;

      // Update bar chart data
      state.barChartData.labels = barbers.map((barber) => barber.name);
      state.barChartData.datasets[0].data = barbers.map(
        (barber) => barber.totalBilled
      );
      state.barChartData.datasets[1].data = barbers.map(
        (barber) => barber.completed
      );

      // Update pie chart data
      const completed = barbers.reduce(
        (sum, barber) => sum + barber.completed,
        0
      );
      const pending = barbers.reduce((sum, barber) => sum + barber.pending, 0);
      const canceled = barbers.reduce(
        (sum, barber) => sum + barber.canceled,
        0
      );

      state.pieChartData.datasets[0].data = [completed, pending, canceled];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setBarbers, setLoading } = barberSlice.actions;

export default barberSlice.reducer;
