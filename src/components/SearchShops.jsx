import React from "react";

const SearchShops = ({ search, setSearch, handleSelectShop }) => {
  const mockShops = [
    { id: 1, name: "Golden Blades" },
    { id: 2, name: "Luxury Cuts" },
    { id: 3, name: "Prestige Barbershop" },
  ];

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a shop..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-lg mb-6 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200 text-black"
      />
      {mockShops
        .filter((shop) => shop.name.toLowerCase().includes(search.toLowerCase()))
        .map((shop) => (
          <div
            key={shop.id}
            onClick={() => handleSelectShop(shop)}
            className="cursor-pointer p-4 bg-white rounded-lg shadow-lg mb-4 hover:bg-yellow-100 hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl text-black font-semibold">{shop.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default SearchShops;
