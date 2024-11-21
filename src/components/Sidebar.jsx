import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const handleLogout = () => {
    // Logic to handle logout (e.g., clearing auth tokens, redirecting to login)
    console.log("User logged out");
    // Example: Redirect to login page
    window.location.href = "/login";
  };

  return (
    <div className="w-64 bg-black text-yellow-400 min-h-screen p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Super Admin</h2>
      <ul className="space-y-8">
        {/* Dashboard Overview */}
        <li>
          <Link
            to="/dashboard"
            className="flex items-center space-x-4 text-lg hover:text-yellow-300 transition-colors"
          >
            <FaClipboardList className="text-2xl" />
            <span>Dashboard Overview</span>
          </Link>
        </li>

        {/* Barbershop List */}
        <li>
          <Link
            to="/dashboard/barbershopslist"
            className="flex items-center space-x-4 text-lg hover:text-yellow-300 transition-colors"
          >
            <FaClipboardList className="text-2xl" />
            <span>Barbershop List</span>
          </Link>
        </li>

        {/* Logout */}
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-4 text-lg text-left w-full hover:text-yellow-300 transition-colors"
          >
            <FaSignOutAlt className="text-2xl" />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
