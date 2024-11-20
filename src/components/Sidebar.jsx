import React from "react";

const Sidebar = ({ onReportSelect }) => {
  const menuItems = [
    { label: "Sales Overview", key: "overview" },
    { label: "Performance Reports", key: "performance" },
    { label: "User & Shop Analytics", key: "analytics" },
    { label: "Key Metrics", key: "metrics" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg">
      <div className="p-6">
        <h1 className="text-3xl font-lobster text-gold">menu</h1>
      </div>
      <nav className="mt-10">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className="cursor-pointer px-6 py-2 hover:bg-gold hover:text-black transition-colors"
              onClick={() => onReportSelect(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
