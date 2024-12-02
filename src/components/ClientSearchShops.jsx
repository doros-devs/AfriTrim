import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/clientSlices/searchSlice"; 
import axios from "axios"; 

const SearchShops = ({ handleSelectShop }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get the backend URL from the environment variable
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5555"; 

  // Fetch shops from the backend API
  useEffect(() => {
    const fetchShops = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${backendUrl}/api/client/barbershops`);
        setShops(response.data); // Assuming your API response is an array of shops
      } catch (err) {
        setError("Failed to fetch shops. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, [backendUrl]); 

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-blackGray rounded-lg shadow-lg max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search for a shop..."
        value={search}
        onChange={handleSearchChange}
        className="w-full p-3 rounded-lg mb-6 border-2 border-lightGray focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200 text-black"
      />
      {loading && <p>Loading shops...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {filteredShops.length > 0 ? (
        filteredShops.map((shop) => (
          <div
            key={shop.id}
            onClick={() => handleSelectShop(shop)}
            className="cursor-pointer p-4 bg-white rounded-lg shadow-lg mb-4 hover:bg-lightgold hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl text-black font-semibold">{shop.name}</h3>
          </div>
        ))
      ) : (
        <p>No shops found</p>
      )}
    </div>
  );
};

export default SearchShops;
