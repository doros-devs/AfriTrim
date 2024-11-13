import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ManageShops from './components/ManageShops';
import Login from './components/SuperAdmin';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-shops" element={<ManageShops />} />
      </Routes>
    </div>
  );
};

export default App;