import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPieChartData } from "../redux/pieChartSlice";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PieChartComponent = ({ onSliceClick }) => {
  const COLORS = ["#D4AF37", "#9E2A2F", "#4C6B33", "#F4E1C1"];
  const dispatch = useDispatch();

  // Fetch pie chart data from Redux store
  const data = useSelector((state) => state.pieChart.data);

  useEffect(() => {
    // Simulated data fetch
    const mockData = [
      { name: "Category A", value: 400 },
      { name: "Category B", value: 300 },
      { name: "Category C", value: 200 },
      { name: "Category D", value: 100 },
    ];

    dispatch(setPieChartData(mockData));
  }, [dispatch]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Tooltip />
        <Legend />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={150}
          fill="#D4AF37"
          onClick={(data, index) => onSliceClick(data, index)}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
