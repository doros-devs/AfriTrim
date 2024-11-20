import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ScheduleSection from "./ScheduleSection";
import ClientsSection from "./ClientsSection";
import NotificationsSection from "./NotificationsSection";
import ReviewsSection from "./ReviewsSection";
// import ProfileSection from "./ProfileSection";

const BarberDashboard = () => {
  const [activeSection, setActiveSection] = useState("appointments");

  const renderSection = () => {
    switch (activeSection) {
      case "schedule":
        return <ScheduleSection schedule={mockData.schedule} />;
      case "clients":
        return <ClientsSection clients={mockData.clients} />;
      case "notifications":
        return <NotificationsSection notifications={mockData.notifications} />;
      case "reviews":
        return <ReviewsSection reviews={mockData.reviews} />;
      // case "profile":
      //   return <ProfileSection />;
      // default:
        return (
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gold">Welcome to the Appointments Section</h2>
            <p className="mt-4 text-gray-300">Manage your daily appointments effectively.</p>
          </section>
        );
    }
  };

  const mockData = {
    clients: [
      { name: "John Doe", lastVisit: "2024-11-10", service: "Haircut" },
      { name: "Jane Smith", lastVisit: "2024-11-12", service: "Shave" },
    ],
    schedule: [
      { day: "Monday", time: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
    ],
    notifications: [
      { message: "New appointment booked by John Doe", time: "2 hours ago" },
    ],
    reviews: [
      { client: "John Doe", rating: 5, comment: "Excellent service!" },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        className="mt-[-10px]" // Move Sidebar up slightly
      />

      {/* Main Content */}
      <div className="flex flex-col w-full bg-black text-white">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full h-16 bg-black text-white px-6 py-4 shadow-lg flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gold">Barber Dashboard</h1>
          <button className="border border-white text-white py-2 px-4 rounded-lg hover:bg-gray-800">
            Logout
          </button>
        </header>

        {/* Dynamic Section Content */}
        <main className="flex-grow pt-16 p-6">{renderSection()}</main>
      </div>
    </div>
  );
};

export default BarberDashboard;
