// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AnalyticsReports from './components/AnalyticsReports';
import ManageBarbers from './components/ManageBarbers';
import ClientEngagement from './components/ClientEngagement';
import BarberAppointments from './components/BarberAppointments'; // Import the new BarberAppointments component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<AnalyticsReports />} />
        <Route path="/manage-barbers" element={<ManageBarbers />} />
        <Route path="/clientEngagement" element={<ClientEngagement />} />
        <Route path="/appointments" element={<BarberAppointments />} /> {/* Route changed to '/appointments' */}
      </Routes>
    </Router>
  );
};

export default App;
