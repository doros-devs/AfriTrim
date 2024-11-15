import React, { useState, useEffect } from "react";

const ShopForm = ({ onSubmit, shopToEdit }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    if (shopToEdit) {
      setName(shopToEdit.name);
      setAddress(shopToEdit.address);
      setOwner(shopToEdit.owner);
    }
  }, [shopToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, address, owner });
    setName("");
    setAddress("");
    setOwner("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded mb-6">
      <h2 className="text-2xl mb-4">
        {shopToEdit ? "Edit Shop" : "Add New Shop"}
      </h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        {shopToEdit ? "Update Shop" : "Add Shop"}
      </button>
    </form>
  );
};

export default ShopForm;
