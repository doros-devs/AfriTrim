import React from "react";

const ServiceSelection = ({ selectedShop, handleSelectService }) => {
  // Example services data (replace with real data from an API or state)
  const services = [
    { id: 1, name: "Haircut", barber: "John Doe" },
    { id: 2, name: "Shaving", barber: "Jane Smith" },
    { id: 3, name: "Styling", barber: "Alice Brown" },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Services at {selectedShop.name}
      </h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li
            key={service.id}
            className="flex justify-between items-center p-4 bg-gray-700 rounded-md hover:bg-yellow-500 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-sm text-gray-400">Barber: {service.barber}</p>
            </div>
            <button
              onClick={() => handleSelectService(service)}
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSelection;
