// import React from 'react';
// import Sidebar from './Sidebar';
// import { Routes, Route } from 'react-router-dom';
// import ManageShops from './ManageShops';
// import Navbar from './Navbar';
// import ShopForm from './ShopForm';

// const Dashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-yellow-400">
//       <Sidebar />
//       <div className="ml-[220px] p-8 flex-1">
//         <Navbar />
//         <div className="bg-black/80 border border-yellow-400 rounded-lg shadow-lg p-6">
//           <h2 className="text-4xl font-extrabold text-center mb-6">
//             Welcome to the Super Admin Dashboard
//           </h2>
//           <Routes>
//             <Route
//               path="/dashboard"
//               element={
//                 <h3 className="text-2xl font-semibold text-center">
//                   Dashboard Overview
//                 </h3>
//               }
//             />
//             <Route path="/manage-shops" element={<ManageShops />} />
//             <Route path="/shopform" element={<ShopForm />} />
//           </Routes>
//         </div>
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchShops();
  }, []);

  // Fetch shops
  const fetchShops = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/shops");
      if (!response.ok) throw new Error("Failed to fetch shops.");
      const data = await response.json();
      setShops(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add or update a shop
  const handleAddOrUpdateShop = async (shopData) => {
    const isEditing = Boolean(shopToEdit);
    const url = isEditing ? `/api/shops/${shopToEdit.id}` : "/api/shops";
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shopData),
      });

      if (!response.ok) throw new Error("Failed to save shop data.");
      const shop = await response.json();

      if (isEditing) {
        setShops((prev) =>
          prev.map((s) => (s.id === shop.id ? shop : s))
        );
        setShopToEdit(null);
      } else {
        setShops((prev) => [...prev, shop]);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete shop
  const handleDeleteShop = async (shopId) => {
    try {
      const response = await fetch(`/api/shops/${shopId}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete shop.");
      setShops((prev) => prev.filter((shop) => shop.id !== shopId));
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit shop
  const handleEditShop = (shop) => {
    setShopToEdit(shop);
  };

  return (
    <div className="bg-black text-gold min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Superadmin Dashboard</h1>

      {error && (
        <div className="text-red-500 mb-4 text-center">
          <p>Error: {error}</p>
        </div>
      )}

      <ShopForm
        onSubmit={handleAddOrUpdateShop}
        shopToEdit={shopToEdit}
        onCancel={() => setShopToEdit(null)}
      />

      {loading ? (
        <div className="flex justify-center items-center my-12">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-gold rounded-full"></div>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {shops.map((shop) => (
            <ShopCard
              key={shop.id}
              shop={shop}
              onEdit={handleEditShop}
              onDelete={handleDeleteShop}
              className="bg-gray-800 text-gold border border-gold rounded-lg shadow-lg p-4"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SuperAdminDashboard;

