import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setChartData } from "./barChartSlice";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ onBarClick }) => {
  const dispatch = useDispatch();

  // Get chart data from Redux store
  const data = useSelector((state) => state.barChart.data);

  useEffect(() => {
    // Simulated data fetch
    const mockData = [
      { date: "2024-11-10", revenue: 500 },
      { date: "2024-11-11", revenue: 700 },
      { date: "2024-11-12", revenue: 800 },
      { date: "2024-11-13", revenue: 600 },
    ];
    dispatch(setChartData(mockData)); // Populate the store
  }, [dispatch]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="revenue"
          fill="#D4AF37"
          onClick={(data) => onBarClick(data)}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
