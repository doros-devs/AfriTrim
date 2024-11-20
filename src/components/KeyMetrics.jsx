import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setMetrics } from "../redux/keyMetricsSlice";
import StatsCard from "./StatsCard";

const KeyMetrics = () => {
  const dispatch = useDispatch();
  
  const [totalUsers, setTotalUsers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [activeSubscriptions, setActiveSubscriptions] = useState(0);
  const [newSignups, setNewSignups] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch users from db.json to calculate Total Users
        const usersResponse = await axios.get("http://localhost:5000/users");
        setTotalUsers(usersResponse.data.length);

        // Fetch barbershops from db.json to calculate average Revenue
        const barbershopsResponse = await axios.get("http://localhost:5000/barbershops");
        const totalRevenue = barbershopsResponse.data.reduce((acc, shop) => acc + shop.revenue, 0);
        setRevenue((totalRevenue / barbershopsResponse.data.length).toFixed(2)); // Calculate average revenue

        // Fetch subscriptions from db.json to calculate Active Subscriptions
        const subscriptionsResponse = await axios.get("http://localhost:5000/subscriptions");
        const activeCount = subscriptionsResponse.data.filter(sub => sub.status === "active").length;
        setActiveSubscriptions(activeCount);

        // Fetch new signups from db.json to get the count of New Signups
        const signupsResponse = await axios.get("http://localhost:5000/newSignups");
        setNewSignups(signupsResponse.data.length);

        // Dispatch metrics data to Redux (Optional)
        const metrics = [
          { title: "Total Users", value: totalUsers },
          { title: "Revenue", value: `$${revenue}` },
          { title: "Active Subscriptions", value: activeSubscriptions },
          { title: "New Signups", value: newSignups }
        ];
        dispatch(setMetrics(metrics)); // Populate Redux store with metrics data

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch, totalUsers, revenue, activeSubscriptions, newSignups]);

  return (
    <div className="space-y-8 p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-black mb-6 text-center">Key Metrics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-full mb-4">
            <i className="fas fa-users fa-2x"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Total Users</h3>
          <p className="text-2xl font-semibold text-black">{totalUsers}</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full mb-4">
            <i className="fas fa-dollar-sign fa-2x"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Revenue</h3>
          <p className="text-2xl font-semibold text-black">${revenue}</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full mb-4">
            <i className="fas fa-check-circle fa-2x"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Active Subscriptions</h3>
          <p className="text-2xl font-semibold text-black">{activeSubscriptions}</p>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-full mb-4">
            <i className="fas fa-user-plus fa-2x"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">New Signups</h3>
          <p className="text-2xl font-semibold text-black">{newSignups}</p>
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;
