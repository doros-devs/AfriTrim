import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile, updateProfileField } from "../redux/profileSlice"; // Import actions

const ProfileEdit = () => {
  const dispatch = useDispatch();

  // Get profile data from the Redux store
  const profileData = useSelector((state) => state.profile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProfileField({ field: name, value })); // Dispatch action to update profile field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., call an API to save the profile data
    console.log("Profile updated:", profileData);
    // Optionally, you can dispatch a setProfile action to save the profile data to Redux store
    // dispatch(setProfile(profileData)); // Uncomment if you want to explicitly set the profile
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

        {/* Avatar upload (optional) */}
        <div className="mb-4">
          <label htmlFor="avatar" className="block text-lg mb-2 text-white">
            Avatar (Profile Picture)
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={(e) => {
              const file = e.target.files[0];
              // You might want to handle file upload here (e.g., convert to base64 or upload to server)
              dispatch(updateProfileField({ field: "avatar", value: file }));
            }}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
          />
        </div>

        {/* Services Offered */}
        <div className="mb-4">
          <label htmlFor="services" className="block text-lg mb-2 text-white">
            Services Offered
          </label>
          <textarea
            id="services"
            name="services"
            value={profileData.services}
            onChange={handleInputChange}
            className="w-full p-3 rounded-md bg-gray-900 text-white border-2 border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold"
            placeholder="List the services you offer"
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
