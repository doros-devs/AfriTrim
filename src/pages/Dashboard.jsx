import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import kymBarbershop from '../assets/kym-barbershop.jpg';

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleLogout = () => navigate('/');
  const handleAnalyticsReports = () => navigate('/analytics');

  return (
    <div className="overflow-hidden min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 w-full p-4 bg-black text-white flex justify-between items-center z-20">
        <button onClick={handleMenuToggle} className="text-white text-3xl">
          <i className="fas fa-bars"></i>
        </button>
        <button
          onClick={handleLogout}
          className="text-white border-2 border-white px-4 py-2 rounded-md transition-all hover:bg-white hover:text-black"
        >
          Logout
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full bg-black text-white p-4 lg:hidden">
          <ul className="mt-4 space-y-4">
            <li onClick={() => navigate('/manage-barbers')}>Manage Barbers</li>
            <li onClick={() => navigate('/appointments')}>Oversee Appointments</li>
            <li onClick={handleAnalyticsReports}>Analytics & Reports</li>
            <li onClick={() => navigate('/clientEngagement')}>Client Engagement</li>
          </ul>
          <button
            onClick={handleLogout}
            className="w-full text-center border-2 border-white py-2 mt-4"
          >
            Logout
          </button>
        </div>
      )}

      <div
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed text-white overflow-hidden"
        style={{ backgroundImage: `url(${kymBarbershop})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-6 text-center max-w-xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-gold">Welcome to AfriTrim</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">Where we fix your looks</p>
          <div className="flex flex-col items-center space-y-4 mt-8 w-full">
            <button
              onClick={() => navigate('/manage-barbers')}
              className="w-full p-4 bg-gold text-black font-semibold rounded-md transition-transform duration-200 transform hover:scale-105 hover:bg-yellow-600"
            >
              Manage Barbers
            </button>
            <button
              onClick={() => navigate('/appointments')}
              className="w-full p-4 bg-gold text-black font-semibold rounded-md transition-transform duration-200 transform hover:scale-105 hover:bg-yellow-600"
            >
               View Appointments
            </button>
            <button
              onClick={handleAnalyticsReports}
              className="w-full p-4 bg-gold text-black font-semibold rounded-md transition-transform duration-200 transform hover:scale-105 hover:bg-yellow-600"
            >
              Analytics Reports
            </button>
            <button
              onClick={() => navigate('/clientEngagement')}
              className="w-full p-4 bg-gold text-black font-semibold rounded-md transition-transform duration-200 transform hover:scale-105 hover:bg-yellow-600"
            >
              Client Engagement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
