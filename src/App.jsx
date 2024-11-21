import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPasword";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import BarbershopsList from "./components/BarbershopsList";
import BarbershopsDetails from "./components/BarbershopsDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

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
