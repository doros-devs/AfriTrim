import React from 'react';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import ManageShops from './ManageShops';
import Navbar from './Navbar';
import ShopForm from './ShopForm';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-yellow-400">
      <Sidebar />
      <div className="ml-[220px] p-8 flex-1">
        <Navbar />
        <div className="bg-black/80 border border-yellow-400 rounded-lg shadow-lg p-6">
          <h2 className="text-4xl font-extrabold text-center mb-6">
            Welcome to the Super Admin Dashboard
          </h2>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <h3 className="text-2xl font-semibold text-center">
                  Dashboard Overview
                </h3>
              }
            />
            <Route path="/manage-shops" element={<ManageShops />} />
            <Route path="/shopform" element={<ShopForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


