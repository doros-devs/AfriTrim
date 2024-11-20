import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLineChartData } from "../redux/lineChartSlice";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartComponent = ({ onPointClick }) => {
  const dispatch = useDispatch();

  // Fetch line chart data from Redux store
  const data = useSelector((state) => state.lineChart.data);

  useEffect(() => {
    // Simulated data fetch
    const mockData = [
      { date: "2024-11-01", income: 400 },
      { date: "2024-11-02", income: 600 },
      { date: "2024-11-03", income: 500 },
      { date: "2024-11-04", income: 700 },
    ];
    dispatch(setLineChartData(mockData)); // Populate Redux store with data
  }, [dispatch]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis
          dataKey="date"
          stroke="#333"
          tick={{ fill: "#555", fontSize: 12 }}
          label={{
            value: "Time",
            position: "insideBottom",
            offset: -10,
            fill: "#333",
            fontSize: 14,
          }}
        />
        <YAxis
          stroke="#333"
          tick={{ fill: "#555", fontSize: 12 }}
          label={{
            value: "Income ($)",
            angle: -90,
            position: "insideLeft",
            fill: "#333",
            fontSize: 14,
          }}
        />
        <Tooltip
          contentStyle={{ backgroundColor: "#000", color: "#fff" }}
          labelStyle={{ color: "#fff" }}
          formatter={(value) => `$${value.toLocaleString()}`}
        />
        <Legend
          verticalAlign="top"
          wrapperStyle={{ color: "#555", fontSize: 12 }}
        />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#D4AF37"
          strokeWidth={3}
          dot={{ r: 5, fill: "#D4AF37", strokeWidth: 2 }}
          activeDot={{
            r: 8,
            fill: "#D4AF37",
            stroke: "#fff",
            strokeWidth: 2,
          }}
          onClick={(data) => onPointClick(data)}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
