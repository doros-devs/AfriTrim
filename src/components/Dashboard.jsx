// import React from 'react';
// import Sidebar from './Sidebar';
// import { Routes, Route } from 'react-router-dom';
// import ManageShops from './ManageShops';

// const Dashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-black text-yellow-400">
//       <Sidebar />
//       <div className="ml-[220px] p-6 flex-1">
//         <h2 className="text-3xl font-bold mb-4">Welcome to the Super Admin Dashboard</h2>
//         <Routes>
//           <Route path="/dashboard" element={<h3 className="text-2xl">Dashboard Overview</h3>} />
//           <Route path="/manage-shops" element={<ManageShops />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import ShopCard from "./ShopCard";
import ShopForm from "./ShopForm";

const SuperAdminDashboard = () => {
  const [shops, setShops] = useState([]);
  const [shopToEdit, setShopToEdit] = useState(null);

  useEffect(() => {
    fetch("/api/shops")
      .then((res) => res.json())
      .then((data) => setShops(data))
      .catch((err) => console.error("Error fetching shops:", err));
  }, []);

  // Add or update a shop
  const handleAddOrUpdateShop = (shopData) => {
    if (shopToEdit) {
      // Update existing shop
      fetch(`/api/shops/${shopToEdit.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shopData),
      })
        .then((res) => res.json())
        .then((updatedShop) => {
          setShops((prev) =>
            prev.map((shop) => (shop.id === updatedShop.id ? updatedShop : shop))
          );
          setShopToEdit(null);
        });
    } else {
      // new shop
      fetch("/api/shops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shopData),
      })
        .then((res) => res.json())
        .then((newShop) => setShops((prev) => [...prev, newShop]));
    }
  };

  // Delete shop
  const handleDeleteShop = (shopId) => {
    fetch(`/api/shops/${shopId}`, { method: "DELETE" })
      .then(() => setShops((prev) => prev.filter((shop) => shop.id !== shopId)))
      .catch((err) => console.error("Error deleting shop:", err));
  };

  // Edit shop
  const handleEditShop = (shop) => {
    setShopToEdit(shop);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Superadmin Dashboard</h1>
      <ShopForm onSubmit={handleAddOrUpdateShop} shopToEdit={shopToEdit} />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => (
          <ShopCard
            key={shop.id}
            shop={shop}
            onEdit={handleEditShop}
            onDelete={handleDeleteShop}
          />
        ))}
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
