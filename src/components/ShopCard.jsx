import React from "react";

const ShopCard = ({ shop, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h3 className="text-xl font-bold">{shop.name}</h3>
      <p>{shop.address}</p>
      <p>Owner: {shop.owner}</p>
      <div className="mt-4">
        <button
          onClick={() => onEdit(shop)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(shop.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
