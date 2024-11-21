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
        // Fetching barbershop data from the correct endpoint
        const barbershopResponse = await axios.get("https://afritrimbackend.onrender.com/api/barbershop/");
        setBarbershopData(barbershopResponse.data);

        // Fetching revenue data from the correct endpoint
        const revenueResponse = await axios.get("https://afritrimbackend.onrender.com/api/sale/");
        setRevenueData(revenueResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sales-overview">
      <h1>Sales Overview</h1>
      <div className="stats">
        <StatsCard title="Total Barbershops" value={barbershopData.length} />
        <StatsCard
          title="Total Revenue"
          value={revenueData.reduce((acc, sale) => acc + sale.amount, 0).toFixed(2)}
        />
      </div>

      <div className="charts">
        {/* Example of a line chart component */}
        <LineChartComponent data={revenueData} />
      </div>
    </div>
  );
};

export default SalesOverview;
