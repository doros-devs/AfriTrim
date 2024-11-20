import React from "react";
import { FaCalendarAlt, FaUsers, FaBell, FaStar, FaUser, FaClipboardList } from "react-icons/fa";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: "appointments", label: "Appointments", icon: <FaClipboardList /> },
    { id: "schedule", label: "Schedule", icon: <FaCalendarAlt /> },
    { id: "clients", label: "Clients", icon: <FaUsers /> },
    { id: "notifications", label: "Notifications", icon: <FaBell /> },
    { id: "reviews", label: "Reviews", icon: <FaStar /> },
    // { id: "profile", label: "Profile", icon: <FaUser /> },
  ];

  return (
    <aside className="w-1/5 bg-black text-white min-h-screen flex items-start justify-center relative">
      <nav className="flex flex-col space-y-4 mt-4"> {/* Adjust margin for spacing */}
        {sections.map((section) => (
          <button
            key={section.id}
            className={`py-2 px-4 flex items-center space-x-2 rounded-lg text-left font-medium ${
              activeSection === section.id
                ? "bg-gold text-black"
                : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            <span>{section.icon}</span>
            <span>{section.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
