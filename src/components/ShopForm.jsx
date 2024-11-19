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
    <form
      onSubmit={handleSubmit}
      className="bg-black text-gold p-10 rounded-lg shadow-2xl border border-gold w-full max-w-lg mx-auto"
    >
      <h2 className="text-4xl font-extrabold text-center mb-6">
        {shopToEdit ? "Edit Shop" : "Add New Shop"}
      </h2>
      <div className="space-y-5">
        <input
          type="text"
          placeholder="Shop Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-800 text-gold border border-gold rounded-lg px-5 py-3 placeholder-gold focus:outline-none focus:ring-4 focus:ring-gold focus:border-transparent transition duration-300"
          required
        />
        <input
          type="text"
          placeholder="Shop Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full bg-gray-800 text-gold border border-gold rounded-lg px-5 py-3 placeholder-gold focus:outline-none focus:ring-4 focus:ring-gold focus:border-transparent transition duration-300"
          required
        />
        <input
          type="text"
          placeholder="Shop Owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          className="w-full bg-gray-800 text-gold border border-gold rounded-lg px-5 py-3 placeholder-gold focus:outline-none focus:ring-4 focus:ring-gold focus:border-transparent transition duration-300"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-8 w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold text-lg px-5 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        {shopToEdit ? "Update Shop" : "Add Shop"}
      </button>
    </form>
  );
};

export default ShopForm;
