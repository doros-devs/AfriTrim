import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedService } from "../redux/clientSlices/serviceSlice";

const ServiceSelection = ({ selectedShop, handleSelectService }) => {
  const dispatch = useDispatch();

  // Example services data (replace with real data from an API or state)
  const services = [
    { id: 1, name: "Haircut", barber: "John Doe" },
    { id: 2, name: "Shaving", barber: "Jane Smith" },
    { id: 3, name: "Styling", barber: "Alice Brown" },
  ];

  // Handle the selection of a service
  const handleServiceSelect = (service) => {
    dispatch(setSelectedService(service)); // Update the Redux state
    if (handleSelectService) {
      handleSelectService(service); // If a handler is passed via props, call it as well
    }
  };

  return (
    <div className="bg-blackGray p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-lightYellow mb-4">
        Services at {selectedShop.name}
      </h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li
            key={service.id}
            className="flex justify-between items-center p-4 bg-lightGray rounded-md hover:bg-lightgold transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">
                {service.name}
              </h3>
              <p className="text-sm text-gray-400">Barber: {service.barber}</p>
            </div>
            <button
              onClick={() => handleServiceSelect(service)}
              className="bg-lightYellow text-black px-4 py-2 rounded hover:bg-yellow-700 transition"
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
