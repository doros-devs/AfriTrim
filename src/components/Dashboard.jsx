import React from 'react';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import ManageShops from './ManageShops';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-black text-yellow-400">
      <Sidebar />
      <div className="ml-[220px] p-6 flex-1">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Super Admin Dashboard</h2>
        <Routes>
          <Route path="/dashboard" element={<h3 className="text-2xl">Dashboard Overview</h3>} />
          <Route path="/manage-shops" element={<ManageShops />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
