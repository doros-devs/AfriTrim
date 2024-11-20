import React from "react";
import { useSelector } from "react-redux";

const TopCustomers = () => {
  // Fetching top customers data from Redux store
  const customers = useSelector((state) => state.topCustomers.customers);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-xl font-medium text-gray-700 mb-4">Top Customers</h3>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id} className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800">
              {customer.name}
            </h4>
            <p className="text-gray-600">Visits: {customer.visits}</p>
            <p className="text-gray-600">Total Spent: ${customer.totalSpent}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCustomers;
