import React from "react";
import Navbar from "./Navbar";

const ClientDashboard = () => {
  return (
    <div className="p-8">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-2">My Appointments</h2>
          <p>View and manage your upcoming and past appointments.</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Available Services</h2>
          <p>
            Browse available services and book appointments with your preferred
            barber.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Notifications</h2>
          <p>Stay updated with your appointment reminders and promotions.</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
