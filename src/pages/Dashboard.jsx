import React, { useState } from "react";
import ManageBarbers from "../components/ManageBarbers";
import ClientEngagement from "../components/ClientEngagement";
import BarberAppointments from "../components/BarberAppointments";
import AnalyticsReports from "../components/AnalyticsReports"; // Import AnalyticsReports
import { FaUserTie, FaCalendarCheck, FaHandshake, FaChartBar } from "react-icons/fa"; 

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState("analytics"); // Default set to 'analytics'

  const handleLogout = () => {
    window.location.href = "/";
  };

  // Render content based on activeContent state
  const renderContent = () => {
    switch (activeContent) {
      case "appointments":
        return <BarberAppointments />;
      case "manageBarbers":
        return <ManageBarbers />;
      case "clientEngagement":
        return <ClientEngagement />;
      case "analytics":
        return <AnalyticsReports />; // Render AnalyticsReports
      default:
        return null;
    }
  };

  return (
    <div
      className="flex min-h-screen text-white"
      style={{
        backgroundColor: "black", // Set background color to black
        width: "100vw",
        height: "100vh"
      }}
    >
      {/* Sidebar */}
      <div
        className="fixed top-0 bottom-0 left-0 w-64 bg-black opacity-90 p-6 flex flex-col space-y-6"
        style={{ zIndex: 10 }}
      >
        {/* AfriTrim Name Restyled and Centered */}
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-3xl font-bold text-gold">AfriTrim</h1>
        </div>
        
        <ul className="space-y-4">
          {/* Analytics Button */}
          <li
            className={`text-lg font-semibold p-2 rounded hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out ${
              activeContent === "analytics" ? "bg-white text-black" : ""
            }`}
            onClick={() => setActiveContent("analytics")}
          >
            <FaChartBar className="inline-block mr-2" /> Analytics
          </li>

          {/* Manage Barbers Button */}
          <li
            className={`text-lg font-semibold p-2 rounded hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out ${
              activeContent === "manageBarbers" ? "bg-white text-black" : ""
            }`}
            onClick={() => setActiveContent("manageBarbers")}
          >
            <FaUserTie className="inline-block mr-2" /> Manage Barbers
          </li>

          {/* Appointments Button */}
          <li
            className={`text-lg font-semibold p-2 rounded hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out ${
              activeContent === "appointments" ? "bg-white text-black" : ""
            }`}
            onClick={() => setActiveContent("appointments")}
          >
            <FaCalendarCheck className="inline-block mr-2" /> Appointments
          </li>

          {/* Client Engagement Button */}
          <li
            className={`text-lg font-semibold p-2 rounded hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in-out ${
              activeContent === "clientEngagement" ? "bg-white text-black" : ""
            }`}
            onClick={() => setActiveContent("clientEngagement")}
          >
            <FaHandshake className="inline-block mr-2" /> Client Engagement
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="ml-64 p-6 flex-1"
        style={{
          height: "100vh",
          overflowY: activeContent === "analytics" ? "hidden" : "auto", // Disable scroll for Analytics, enable for others
          transition: "opacity 0.3s ease-in-out", // Smooth transition for content visibility
          opacity: activeContent === "analytics" ? 1 : 0.9, // Apply opacity change for smooth transition
        }}
      >
        {/* Navbar with logout on the right */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold"></h1>
          <button
            onClick={handleLogout}
            className="p-2 border-2 border-white hover:bg-white hover:text-black text-white rounded-md transition-all duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>

        {/* Content Rendered based on activeContent */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
