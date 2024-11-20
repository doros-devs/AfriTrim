import React, { useEffect, useState } from "react";
import axios from "axios";

const PerformanceReports = () => {
  const [registrations, setRegistrations] = useState({});
  const [topShops, setTopShops] = useState([]);
  const [lowShops, setLowShops] = useState([]);
  const [serviceCount, setServiceCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching registration data
        const registrationResponse = await axios.get("http://localhost:5000/registrations");
        const registrationsData = registrationResponse.data;
        setRegistrations({
          lastMonth: registrationsData.find(r => r.period === "lastMonth").count,
          lastQuarter: registrationsData.find(r => r.period === "lastQuarter").count,
          lastYear: registrationsData.find(r => r.period === "lastYear").count,
        });

        // Fetching top and low performing barbershops
        const barbershopResponse = await axios.get("http://localhost:5000/barbershops");
        const barbershops = barbershopResponse.data;
        setTopShops(barbershops.filter(shop => shop.revenue >= 5000));
        setLowShops(barbershops.filter(shop => shop.revenue < 5000));

        // Fetching total services completed
        const serviceResponse = await axios.get("http://localhost:5000/serviceCount");
        setServiceCount(serviceResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      {/* New Registrations */}
      <div className="bg-white p-6 shadow-luxury rounded-lg">
        <h2 className="text-2xl font-lobster text-black mb-4">New Registrations</h2>
        <div className="space-y-2">
          <p className="text-lg">Last Month: {registrations.lastMonth}</p>
          <p className="text-lg">Last Quarter: {registrations.lastQuarter}</p>
          <p className="text-lg">Last Year: {registrations.lastYear}</p>
        </div>
      </div>

      {/* Top & Low Performing Barbershops */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-luxury rounded-lg">
          <h3 className="text-xl font-bold text-black mb-4">Top Performing Shops</h3>
          <ul>
            {topShops.map((shop) => (
              <li key={shop.id} className="mb-2">
                <div className="font-medium">{shop.name}</div>
                <div className="text-sm text-gray-500">Revenue: ${shop.revenue}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 shadow-luxury rounded-lg">
          <h3 className="text-xl font-bold text-black mb-4">Low Performing Shops</h3>
          <ul>
            {lowShops.map((shop) => (
              <li key={shop.id} className="mb-2">
                <div className="font-medium">{shop.name}</div>
                <div className="text-sm text-gray-500">Revenue: ${shop.revenue}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Service Count */}
      <div className="bg-white p-6 shadow-luxury rounded-lg">
        <h2 className="text-2xl font-lobster text-black mb-4">Total Services Completed</h2>
        <p className="text-lg">{serviceCount}</p>
      </div>
    </div>
  );
};

export default PerformanceReports;
