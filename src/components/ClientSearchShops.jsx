import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/clientSlices/searchSlice";
import axios from "axios";

const SearchShops = ({ handleSelectShop }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const [shops, setShops] = useState([]);
  const [selectedShopDetails, setSelectedShopDetails] = useState(null); // For storing selected shop details
  const [services, setServices] = useState([]); // For storing services of the selected shop
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
        const response = await axios.get(
          `${backendUrl}/api/client/barbershops`
        );
        setShops(response.data); // Assuming your API response is an array of shops
      } catch (err) {
        setError("Failed to fetch shops. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, [backendUrl]);

  // Fetch the details and services of the selected shop
  const fetchShopDetails = async (shopId) => {
    setLoading(true);
    try {
      // Fetch shop details
      const shopResponse = await axios.get(
        `${backendUrl}/api/client/barbershop/${shopId}`
      );
      setSelectedShopDetails(shopResponse.data); // Store the selected shop's details

      // Fetch services offered by the shop
      const servicesResponse = await axios.get(
        `${backendUrl}/api/client/barbershop/${shopId}/services`
      );
      setServices(servicesResponse.data); // Store the services offered by the shop
    } catch (err) {
      setError(
        "Failed to fetch shop details or services. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleShopSelect = (shop) => {
    handleSelectShop(shop); // Call parent handler (if needed)
    fetchShopDetails(shop.id); // Fetch shop details and services by ID
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
            onClick={() => handleShopSelect(shop)} // Fetch shop details when clicked
            className="cursor-pointer p-4 bg-white rounded-lg shadow-lg mb-4 hover:bg-lightgold hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl text-black font-semibold">{shop.name}</h3>
          </div>
        ))
      ) : (
        <p>No shops found</p>
      )}

      {/* Show selected shop details if available */}
      {selectedShopDetails && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">{selectedShopDetails.name}</h2>
          <p>
            <strong>Location:</strong> {selectedShopDetails.location}
          </p>
          <p>
            <strong>Contact:</strong> {selectedShopDetails.contact}
          </p>
          <p>
            <strong>Description:</strong> {selectedShopDetails.description}
          </p>
        </div>
      )}

      {/* Show services offered by the selected shop if available */}
      {services.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Services Offered</h3>
          <ul>
            {services.map((service) => (
              <li key={service.id} className="mt-2">
                <p className="text-lg">{service.name}</p>
                <p>{service.description}</p>
                <p>
                  <strong>Price:</strong> ${service.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchShops;
