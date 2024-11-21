import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const handleLogout = () => {
    console.log("User logged out");
    window.location.href = "/login";
  };

  return (
    <div className="w-64 bg-blackGray text-gold min-h-screen p-6 shadow-xl">
      {/* Sidebar Header */}
      <h2 className="text-3xl font-bold mb-8 text-center">Super Admin</h2>

      {/* Navigation Links */}
      <ul className="space-y-8">
        <li>
          <Link
            to="/dashboard"
            className="flex items-center space-x-4 text-lg hover:text-lightgold transition-all"
          >
            <FaClipboardList className="text-2xl" />
            <span>Dashboard Overview</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/barbershopslist"
            className="flex items-center space-x-4 text-lg hover:text-lightgold transition-all"
          >
            <FaClipboardList className="text-2xl" />
            <span>Barbershop List</span>
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-4 text-lg text-left w-full hover:text-lightgold transition-all"
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
