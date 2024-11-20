import React, { useState, useEffect } from "react";

const ProfileEdit = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: null,
    services: {}, // Contains barber-service mappings
    location: "",
    openingHours: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
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
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg mb-2 text-white">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={profileData.phone}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
            required
          />
        </div>

        {/* Avatar upload */}
        <div className="mb-4">
          <label htmlFor="avatar" className="block text-lg mb-2 text-white">
            Avatar (Profile Picture)
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleAvatarChange}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
          />
        </div>

        {/* Services Offered */}
        <div className="mb-4">
          <label htmlFor="services" className="block text-lg mb-2 text-white">
            Services Offered
          </label>
          <div>
            {barbers.map((barber) => (
              <div key={barber.id} className="mb-4">
                <h3 className="text-lg text-white">{barber.name}</h3>
                <div>
                  {/* List services (you can replace these with actual services) */}
                  {["Haircut", "Shave", "Trim"].map((service) => (
                    <div key={service} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id={`${barber.id}-${service}`}
                        name={service}
                        checked={profileData.services[barber.id]?.includes(service)}
                        onChange={(e) => handleServiceChange(e, barber.id)}
                        className="p-2"
                      />
                      <label
                        htmlFor={`${barber.id}-${service}`}
                        className="text-white"
                      >
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

        {/* Opening and Closing Hours */}
        <div className="mb-4">
          <label
            htmlFor="openingHours"
            className="block text-lg mb-2 text-white"
          >
            Opening and Closing Hours
          </label>
          <input
            type="text"
            id="openingHours"
            name="openingHours"
            value={profileData.openingHours}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
            placeholder="e.g., Mon-Fri: 9 AM - 6 PM"
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
