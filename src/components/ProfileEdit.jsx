import React, { useState } from "react";

const ProfileEdit = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: null,
    services: {}, // Barber-service mappings
    location: "",
    openingHours: "",
  });

  const barbers = [
    { id: 1, name: "Barber 1" },
    { id: 2, name: "Barber 2" },
  ];

  const handleInputChange = (e) => setProfileData({ ...profileData, [e.target.name]: e.target.value });
  const handleAvatarChange = (e) => setProfileData({ ...profileData, avatar: e.target.files[0] });

  const handleServiceChange = (e, barberId) => {
    const { name, checked } = e.target;
    const updatedServices = { ...profileData.services };
    if (!updatedServices[barberId]) updatedServices[barberId] = [];
    updatedServices[barberId] = checked
      ? [...updatedServices[barberId], name]
      : updatedServices[barberId].filter((service) => service !== name);
    setProfileData({ ...profileData, services: updatedServices });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
    // Send updated data to the API/backend
  };

  return (
    <div className="w-full max-w-md mx-auto bg-black p-6 rounded-md text-white">
      <h2 className="text-2xl font-bold mb-4 text-gold">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        {["name", "email", "phone", "location", "openingHours"].map((field) => (
          <div className="mb-4" key={field}>
            <label htmlFor={field} className="block text-lg mb-2 text-white">
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              value={profileData[field]}
              onChange={handleInputChange}
              className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
            />
          </div>
        ))}
        
        <div className="mb-4">
          <label htmlFor="avatar" className="block text-lg mb-2 text-white">Avatar</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleAvatarChange}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="services" className="block text-lg mb-2 text-white">Services Offered</label>
          {barbers.map((barber) => (
            <div key={barber.id} className="mb-4">
              <h3 className="text-lg text-white">{barber.name}</h3>
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
                  <label htmlFor={`${barber.id}-${service}`} className="text-white">{service}</label>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button type="submit" className="w-full p-3 rounded-md bg-gold text-black hover:bg-yellow-500 transition duration-300">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
