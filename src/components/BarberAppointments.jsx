// src/BarberAppointments.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBarbers, setLoading } from "../redux/barberSlice"; // Import actions
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const BarberAppointments = () => {
  const dispatch = useDispatch();
  const { barbers, loading, barChartData, pieChartData } = useSelector(
    (state) => state.barbers
  );

  useEffect(() => {
    dispatch(setLoading(true));

    const fetchData = async () => {
      // Example setup with 10 barbers
      const updatedBarbers = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Barber ${i + 1}`,
        appointments: [],
        totalBilled: Math.floor(Math.random() * 1000),
        completed: Math.floor(Math.random() * 20),
        canceled: Math.floor(Math.random() * 5),
        pending: Math.floor(Math.random() * 10),
      }));

      // Dispatch the fetched data to the store
      dispatch(setBarbers(updatedBarbers));
      dispatch(setLoading(false));
    };

    fetchData();
  }, [dispatch]);

  if (loading)
    return (
      <div className="text-center p-8 text-lg text-white">
        Loading barber data...
      </div>
    );

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <nav className="bg-gray-900 text-white p-4 flex justify-center items-center shadow-md">
        <h1 className="text-3xl font-semibold">
          Barber Appointments Analytics
        </h1>
      </nav>

      {/* Chart Section with Horizontal Scroll */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">
            Revenue & Appointment Stats
          </h2>
          <div
            style={{
              width: barbers.length > 5 ? "1000px" : "100%",
              height: "300px",
            }}
          >
            <Bar
              data={barChartData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">
            Overall Appointment Status
          </h2>
          <div style={{ height: "300px" }}>
            <Pie
              data={pieChartData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>

      {/* Barber Stats Section with Responsive Grid and Pagination */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {barbers.map((barber) => (
          <div
            key={barber.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-center text-blue-400 mb-4">
              {barber.name}
            </h3>
            <div className="space-y-2">
              <p className="text-lg font-medium">
                <strong>Total Revenue:</strong> ${barber.totalBilled}
              </p>
              <p className="text-lg font-medium">
                <strong>Total Appointments:</strong>{" "}
                {barber.appointments.length}
              </p>
              <p className="text-lg font-medium">
                <strong>Completed:</strong> {barber.completed}
              </p>
              <p className="text-lg font-medium">
                <strong>Pending:</strong> {barber.pending}
              </p>
              <p className="text-lg font-medium">
                <strong>Canceled:</strong> {barber.canceled}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarberAppointments;
