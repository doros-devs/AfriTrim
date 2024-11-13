import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard'; // Dashboard will handle all content rendering
import AnalyticsReports from './components/AnalyticsReports';
import ManageBarbers from './components/ManageBarbers';
import ClientEngagement from './components/ClientEngagement';
import BarberAppointments from './components/BarberAppointments'; // Import the new BarberAppointments component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Route for the Dashboard where dynamic content will be rendered */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional: Routes for separate components in case you want direct access */}
        {/* These can be removed since Dashboard will handle this now */}
        {/* <Route path="/appointments" element={<BarberAppointments />} />
        <Route path="/analytics" element={<AnalyticsReports />} />
        <Route path="/manage-barbers" element={<ManageBarbers />} />
        <Route path="/clientEngagement" element={<ClientEngagement />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
