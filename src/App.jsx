import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Forgotpassword from "./components/Forgotpasword";
import LandingPage from "./components/LandingPage";
import AdminDashboard from "./components/AdminDashboard";
import BarberDashboard from "./components/BarberDashboard";
import ClientDashboard from "./components/ClientDashboard";
import Dashboard from "./components/Dashboard";
import BarbershopsList from "./components/BarbershopsList";
import BarbershopsDetails from "./components/BarbershopsDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/barber-dashboard" element={<BarberDashboard />} />  
        <Route path="/client-dashboard" element={<ClientDashboard />} />


        {/* Dashboard with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="barbershopslist" element={<BarbershopsList />} />
          <Route path="barbershopsdetails" element={<BarbershopsDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
