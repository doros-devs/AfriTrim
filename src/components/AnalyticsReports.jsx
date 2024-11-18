// src/AnalyticsReports.js
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePerformanceData } from "../redux/analyticsSlice"; // Import the action
import { Chart } from "chart.js/auto";

const AnalyticsReports = () => {
  // Get analytics data from the Redux store
  const analyticsData = useSelector((state) => state.analytics);
  const dispatch = useDispatch();

  const chartRef = useRef(null);
  const performanceChart = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (performanceChart.current) {
        performanceChart.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      performanceChart.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: analyticsData.performanceOverTime.map(
            (_, index) => `Week ${index + 1}`
          ),
          datasets: [
            {
              label: "Performance Over Time",
              data: analyticsData.performanceOverTime,
              borderColor: "#FFD700",
              backgroundColor: "rgba(255, 215, 0, 0.3)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    }

    return () => {
      if (performanceChart.current) {
        performanceChart.current.destroy();
      }
    };
  }, [analyticsData.performanceOverTime]);

  // Example of dispatching an action to update performance data (could be used in an event or API response)
  const handleUpdatePerformance = () => {
    const newPerformanceData = [250, 450, 350, 550, 650, 750, 850]; // New performance data
    dispatch(updatePerformanceData(newPerformanceData));
  };

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col p-4 overflow-hidden">
      <h2 className="text-2xl font-semibold mb-6 text-center text-golden">
        Analytics & Reports
      </h2>

      {/* Analytics Data Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-6 flex-grow">
        {[
          {
            title: "Total Revenue",
            value: `$${analyticsData.totalRevenue.toLocaleString()}`,
          },
          {
            title: "Total Payments",
            value: `$${analyticsData.totalPayments.toLocaleString()}`,
          },
          {
            title: "Total Appointments",
            value: analyticsData.totalAppointments,
          },
          {
            title: "New Clients This Week",
            value: analyticsData.newClientsThisWeek,
          },
          {
            title: "Top Performing Barber",
            value: analyticsData.topPerformingBarber,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all"
          >
            <h3 className="text-lg font-semibold text-golden mb-2">
              {item.title}
            </h3>
            <p className="text-xl">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-4 flex-grow">
        <h3 className="text-lg font-semibold text-golden mb-4">
          Performance Over Time
        </h3>
        <div className="relative h-80 w-full overflow-hidden rounded-xl">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>

      <button
        onClick={handleUpdatePerformance}
        className="mt-4 bg-blue-500 p-2 rounded-xl text-white"
      >
        Update Performance Data
      </button>
    </div>
  );
};

export default AnalyticsReports;
