import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BarbershopsList = () => {
  const [barbershops, setBarbershops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBarbershops = async () => {
      try {
        const response = await fetch("https://afritrimbackend.onrender.com/admin/barbershop");
        if (!response.ok) {
          throw new Error("Failed to fetch barbershops");
        }
        const data = await response.json();
        setBarbershops(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBarbershops();
  }, []);

  if (loading) {
    return <div className="text-yellow-400 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <ul className="space-y-4">
      {barbershops.length === 0 ? (
        <p className="text-yellow-400 text-center">No barbershops registered yet.</p>
      ) : (
        barbershops.map((shop) => (
          <li key={shop.id}>
            <Link
              to={`/dashboard/barbershops/${shop.id}`} // Ensure the path is /dashboard/barbershops/:id
              className="flex items-center space-x-4 p-2 bg-black text-yellow-400 border border-yellow-300 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors"
            >
              <div>
                <h2 className="text-lg font-bold">{shop.name}</h2>
                <p className="text-sm">Location: {shop.location}</p>
                <p className="text-sm">Contact: {shop.contact}</p>
              </div>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default BarbershopsList;
