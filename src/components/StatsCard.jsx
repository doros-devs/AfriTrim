import React from "react";

const StatsCard = ({ title, value }) => (
  <div className="bg-white p-6 shadow-lg rounded-lg">
    <h3 className="text-xl font-medium text-gray-700">{title}</h3>
    <p className="text-3xl font-semibold text-gray-900">{value}</p>
  </div>
);

export default StatsCard;
