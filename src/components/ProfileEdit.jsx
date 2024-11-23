import React, { useState, useEffect } from "react";

const ProfileEdit = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    photo_url: "",
    location: "",
  });

  const [barbers, setBarbers] = useState([
    // Example list of barbers; you may fetch this list from an API or Redux
    { id: 1, name: "Barber 1" },
    { id: 2, name: "Barber 2" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleServiceChange = (e, barberId) => {
    const { name, checked } = e.target;
    const updatedServices = { ...profileData.services };

    // Ensure the barber has an entry for services
    if (!updatedServices[barberId]) {
      updatedServices[barberId] = [];
    }

    // Add or remove the service based on checkbox status
    if (checked) {
      updatedServices[barberId].push(name);
    } else {
      updatedServices[barberId] = updatedServices[barberId].filter(
        (service) => service !== name
      );
    }

    setProfileData({ ...profileData, services: updatedServices });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setProfileData({ ...profileData, avatar: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch(`http://localhost:5555/api/barbershop/2`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      const data = await response.json()

      if(response.ok){
        alert("Profile changed successfully.")
      }

    } catch (error) {
      console.log(error)
    }
    // Here you can send the updated profile data to an API or backend
  };

  return (
    <div className="w-full max-w-md mx-auto bg-black p-6 rounded-md text-white">
      <h2 className="text-2xl font-bold mb-4 text-gold">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg mb-2 text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
            placeholder="Your new name"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-lg mb-2 text-white">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={profileData.location}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
            placeholder="Your business location"
          />
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <label htmlFor="Photo URL" className="block text-lg mb-2 text-white">
            Photo URL
          </label>
          <input
            type="text"
            id="photo_url"
            name="photo_url"
            value={profileData.photo_url}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
            placeholder="Your photo url"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded-md bg-gold text-black hover:bg-yellow-500 transition duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
