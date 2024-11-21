import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BarbershopsList = () => {
  const [barbershops, setBarbershops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBarbershops = async () => {
      try {
        const response = await fetch(
          "https://afritrimbackend.onrender.com/api/admin/barbershops"
        );
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
    return <div className="text-gold text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="bg-blackGray p-6 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold text-gold mb-4 text-center">
        Barbershops List
      </h3>
      <ul className="space-y-4">
        {barbershops.length === 0 ? (
          <p className="text-gold text-center">
            No barbershops registered yet.
          </p>
        ) : (
          barbershops.map((shop) => (
            <li key={shop.id}>
              <Link
                to={`/dashboard/barbershops/${shop.id}`}
                className="flex flex-col items-center justify-center p-6 bg-darkGray text-lightGray border border-lightgold rounded-lg hover:bg-gold hover:text-blackGray transition-all space-y-2"
              >
                <h2 className="text-lg font-bold">{shop.name}</h2>
                <p className="text-sm">Location: {shop.location}</p>
                <p className="text-sm">Contact: {shop.contact}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BarbershopsList;
