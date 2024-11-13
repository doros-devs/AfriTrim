import React, { useState } from "react";

const ProfileEdit = () => {
  // Initial profile data (you may fetch this from an API)
  const [profileData, setProfileData] = useState({
    name: "John Doe", // Example name
    email: "johndoe@example.com", // Example email
    phone: "123-456-7890", // Example phone
    avatar: "", // Profile picture URL or base64 string
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., call an API to save the profile data
    console.log("Profile updated:", profileData);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-black p-6 rounded-md text-white">
      <h2 className="text-2xl font-bold mb-4 text-gold">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
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

        {/* Avatar upload (optional) */}
        <div className="mb-4">
          <label htmlFor="avatar" className="block text-lg mb-2 text-white">
            Avatar (Profile Picture)
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={(e) => setProfileData({ ...profileData, avatar: e.target.files[0] })}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
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
