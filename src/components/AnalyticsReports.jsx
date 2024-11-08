import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart } from 'chart.js/auto';

const AnalyticsReports = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalRevenue: 10000,
    totalAppointments: 120,
    newClientsThisWeek: 50,
    topPerformingBarber: 'John Doe',
    performanceOverTime: [200, 400, 300, 500, 600, 700, 800],
  });

  const navigate = useNavigate();
  const chartRef = useRef(null);
  const performanceChart = useRef(null); // Store the Chart.js instance

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the existing chart if it already exists
      if (performanceChart.current) {
        performanceChart.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      // Initialize the chart
      performanceChart.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: analyticsData.performanceOverTime.map((_, index) => `Week ${index + 1}`),
          datasets: [
            {
              label: 'Performance Over Time',
              data: analyticsData.performanceOverTime,
              borderColor: '#FFD700',
              backgroundColor: 'rgba(255, 215, 0, 0.3)',
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

    // Cleanup on component unmount
    return () => {
      if (performanceChart.current) {
        performanceChart.current.destroy();
      }
    };
  }, [analyticsData.performanceOverTime]);

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col p-6 overflow-hidden relative">
      <nav className="flex justify-between items-center bg-gray-900 p-4 shadow-md mb-6">
        <button
          onClick={handleGoBack}
          className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md border-2 border-yellow-500 hover:bg-yellow-600 hover:text-white transition-all duration-200"
        >
          Go Back
        </button>
        <h1 className="text-xl font-bold text-golden">Analytics Dashboard</h1>
      </nav>

      <h2 className="text-3xl font-semibold mb-4 text-center text-golden">Analytics & Reports</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200">
          <h3 className="text-xl font-semibold text-golden">Total Revenue</h3>
          <p className="text-2xl">${analyticsData.totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200">
          <h3 className="text-xl font-semibold text-golden">Total Appointments</h3>
          <p className="text-2xl">{analyticsData.totalAppointments}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200">
          <h3 className="text-xl font-semibold text-golden">New Clients This Week</h3>
          <p className="text-2xl">{analyticsData.newClientsThisWeek}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200">
          <h3 className="text-xl font-semibold text-golden">Top Performing Barber</h3>
          <p className="text-2xl">{analyticsData.topPerformingBarber}</p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 mt-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold text-golden mb-4">Performance Over Time</h3>
        <div className="h-64 w-full">
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReports;
