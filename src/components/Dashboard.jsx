import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import ManageShops from "./ManageShops";
import ShopForm from "./ShopForm";
import BarbershopsList from "./BarbershopsList"; 
import BarbershopDetails from "./BarbershopsDetails"; // Import the BarbershopDetails component

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-yellow-400">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="ml-[220px] p-8 flex-1">
        {/* Dashboard Box */}
        <div className="bg-black/80 border border-yellow-400 rounded-lg shadow-lg p-6">
          <h2 className="text-4xl font-extrabold text-center mb-6">
            Welcome to the Super Admin Dashboard
          </h2>

          {/* Nested Routes */}
          <Routes>
            <Route
              index
              element={
                <h3 className="text-2xl font-semibold text-center">
                  Dashboard Overview
                </h3>
              }
            />
            <Route path="manage-shops" element={<ManageShops />} />
            <Route path="shopform" element={<ShopForm />} />
            <Route path="barbershoplist" element={<BarbershopsList />} />
            <Route path="barbershops/:id" element={<BarbershopDetails />} /> {/* Correct path for details */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
