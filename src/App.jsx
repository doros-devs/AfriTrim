import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/Forgotpassword";
import LandingPage from "./components/LandingPage";
import AdminDashboard from "./pages/AdminDashboard"; // from ft-shopadmin
import MainPage from "./pages/MainPage"; // from ft-shopadmin
import BarberDashboard from "./components/BarberDashboard";
import ClientDashboard from "./components/ClientDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Dashboard Route - after login */}
        <Route path="/main" element={<MainPage />} />
        
        {/* Admin Dashboard Route */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        
        {/* Barber and Client Dashboards */}
        <Route path="/barber-dashboard" element={<BarberDashboard />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
