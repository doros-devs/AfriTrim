import React, { useEffect, useState } from "react";
import axios from "axios";
import LineChartComponent from "./LineChartComponent";
import StatsCard from "./StatsCard";

const SalesOverview = () => {
  const [barbershopData, setBarbershopData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching top-performing barbershops
        const barbershopResponse = await axios.get("http://localhost:5000/barbershops");
        setBarbershopData(barbershopResponse.data);

        // Fetching sales trends (revenue data)
        const salesTrendResponse = await axios.get("http://localhost:5000/salesTrends");
        setRevenueData(salesTrendResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Sales by Barbershop */}
      <div className="bg-white p-6 shadow-xl rounded-lg border-2 border-black">
        <h2 className="text-3xl font-bold text-black mb-4 text-center">
          Top-Performing Barbershops
        </h2>
        <ul className="space-y-3">
          {barbershopData.map((shop) => (
            <li
              key={shop.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-lg hover:bg-gold-200 transition-all"
            >
              <span className="font-medium text-lg text-black">{shop.name}</span>
              <span className="font-medium text-lg text-gold-500">${shop.revenue}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sales Trends */}
      <div className="bg-white p-6 shadow-xl rounded-lg border-2 border-black">
        <h2 className="text-3xl font-bold text-black mb-4 text-center">
          Sales Trends Over Time
        </h2>
        <LineChartComponent
          data={revenueData}
          onPointClick={(data) => console.log("Point clicked:", data)}
        />
      </div>
    </div>
  );
};

export default SalesOverview;
