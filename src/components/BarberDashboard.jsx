import React from "react";
import Navbar from "./Navbar";

const BarberDashboard = () => {
  return (
    <div className="p-8">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Barber Dashboard</h1>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Manage Barbers</h2>
          <p>Add, remove, and manage barbers working at your barbershop.</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Services Offered</h2>
          <p>Define the services offered and set pricing for each service.</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Appointments</h2>
          <p>
            View all appointments booked at your barbershop and manage
            schedules.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BarberDashboard;
