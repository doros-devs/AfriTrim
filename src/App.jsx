import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AdminDashboard from './pages/AdminDashboard'; // Dashboard will handle all content rendering


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<MainPage />} />
        
        {/* Route for the Dashboard where dynamic content will be rendered */}
        <Route path="/dashboard" element={<AdminDashboard />} />


      </Routes>
    </Router>
  );
};

export default App;
