import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBarbers } from "./barbersPerformanceSlice";

const BarbersPerformance = () => {
  const dispatch = useDispatch();

  // Select barbers' data from the Redux store
  const barbers = useSelector((state) => state.barbersPerformance.barbers);

  useEffect(() => {
    // Simulated data fetch
    const mockData = [
      { id: 1, name: "John Doe", clientsServed: 50, totalRevenue: 2000 },
      { id: 2, name: "Jane Smith", clientsServed: 30, totalRevenue: 1500 },
      { id: 3, name: "Mike Johnson", clientsServed: 25, totalRevenue: 1200 },
    ];
    dispatch(setBarbers(mockData));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {barbers.map((barber) => (
        <div key={barber.id} className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-medium text-gray-700">{barber.name}</h3>
          <p className="text-lg text-gray-600">
            Clients Served: {barber.clientsServed}
          </p>
          <p className="text-lg text-gray-600">
            Total Revenue: ${barber.totalRevenue}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BarbersPerformance;
