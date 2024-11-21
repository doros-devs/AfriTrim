import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import BarbershopDetails from "./BarbershopsDetails";
import BarbershopsList from "./BarbershopsList";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blackGray via-darkGray to-blackGray text-lightGray">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Motion Wrapper for Fade-in Animation */}
        <motion.div
          className="bg-darkGray border border-gold rounded-lg shadow-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-6 text-gold">
            Super Admin Dashboard
          </h2>

          {/* Nested Routes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Routes>
              <Route
                index
                element={
                  <motion.h3
                    className="text-2xl font-semibold text-center text-lightgold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Welcome to the Dashboard Overview
                  </motion.h3>
                }
              />
              <Route
                path="barbershopslist"
                element={
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BarbershopsList />
                  </motion.div>
                }
              />
              <Route
                path="barbershops/:id"
                element={
                  <motion.div
                    initial={{ opacity: 0, rotate: -5 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BarbershopDetails />
                  </motion.div>
                }
              />
            </Routes>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
