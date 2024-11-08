import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import kymBarbershop from '../assets/kym-barbershop.jpg';

const ManageBarbers = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isViewFormVisible, setIsViewFormVisible] = useState(false);
  const [barbers, setBarbers] = useState([]);
  const [barberDetails, setBarberDetails] = useState({
    name: '',
    roles: '',
    age: '',
    startDate: '',
    experience: '',
    gender: '',
    phoneNumber: '',
    profilePicture: ''
  });
  const [isActive, setIsActive] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showButtons, setShowButtons] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => navigate('/dashboard');

  const handleViewBack = () => {
    setIsViewFormVisible(false);
    setShowButtons(true);
  };

  const handleButtonClick = () => {
    if (isEditMode) {
      const updatedBarbers = barbers.map((barber, index) =>
        index === isEditMode ? { ...barberDetails } : barber
      );
      setBarbers(updatedBarbers);
      setIsEditMode(false);
    } else {
      setBarbers([...barbers, { ...barberDetails }]);
    }

    setSuccessMessage(isEditMode ? 'Barber updated successfully!' : 'Barber added successfully!');
    setTimeout(() => setSuccessMessage(''), 2000);
    setIsAddFormVisible(false);
    setShowButtons(true);
    setBarberDetails({
      name: '',
      roles: '',
      age: '',
      startDate: '',
      experience: '',
      gender: '',
      phoneNumber: '',
      profilePicture: ''
    });
    setIsActive(true);
    setTimeout(() => setIsActive(false), 1000);
  };

  const handleDeleteBarber = (index) => {
    const updatedBarbers = barbers.filter((_, i) => i !== index);
    setBarbers(updatedBarbers);
  };

  const handleEditBarber = (index) => {
    setBarberDetails(barbers[index]);
    setIsAddFormVisible(true);
    setShowButtons(false);
    setIsEditMode(index);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBarberDetails({ ...barberDetails, profilePicture: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 z-0"
        style={{
          backgroundImage: `url(${kymBarbershop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative flex flex-col items-center justify-center min-h-screen z-10">
        <nav className="absolute top-0 right-0 w-full p-4 bg-black bg-opacity-80 text-white flex justify-end items-center z-20 shadow-md">
          <button onClick={handleBack} className="border border-white text-white text-lg px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-black">
            Back
          </button>
        </nav>

        <h2 className="text-4xl font-extrabold mb-6 text-center text-white drop-shadow-lg">Manage Barbers</h2>

        {showButtons && (
          <div className="flex flex-col items-center gap-6 mb-8 w-full max-w-xs">
            <button
              onClick={() => {
                setIsAddFormVisible(true);
                setIsViewFormVisible(false);
                setShowButtons(false);
              }}
              className="w-full px-6 py-3 rounded-md font-semibold text-white border-2 border-white bg-gradient-to-r from-gold to-yellow-500 shadow-md transition duration-300 ease-in-out hover:scale-105"
            >
              Add Barber
            </button>
            <button
              onClick={() => {
                setIsViewFormVisible(true);
                setIsAddFormVisible(false);
                setShowButtons(false);
              }}
              className="w-full px-6 py-3 rounded-md font-semibold text-white border-2 border-white bg-gradient-to-r from-gold to-yellow-500 shadow-md transition duration-300 ease-in-out hover:scale-105"
            >
              View Added Barbers
            </button>
          </div>
        )}

        {isAddFormVisible && (
          <div className="bg-black bg-opacity-80 p-8 rounded-lg border-2 border-white w-full max-w-lg text-white mt-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-center text-gold mb-6">{isEditMode ? 'Edit Barber' : 'Add Barber'}</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={barberDetails.name}
                onChange={(e) => setBarberDetails({ ...barberDetails, name: e.target.value })}
                className="w-full p-3 rounded-md bg-gray-700 text-white border-2 border-white shadow-inner"
              />
              <input
                type="text"
                placeholder="Roles (separate by comma)"
                value={barberDetails.roles}
                onChange={(e) => setBarberDetails({ ...barberDetails, roles: e.target.value })}
                className="w-full p-3 rounded-md bg-gray-700 text-white border-2 border-white shadow-inner"
              />
              <input
                type="number"
                placeholder="Age"
                value={barberDetails.age}
                onChange={(e) => setBarberDetails({ ...barberDetails, age: e.target.value })}
                className="w-full p-3 rounded-md bg-gray-700 text-white border-2 border-white shadow-inner"
              />
              <input
                type="date"
                value={barberDetails.startDate}
                onChange={(e) => setBarberDetails({ ...barberDetails, startDate: e.target.value })}
                className="w-full p-3 rounded-md bg-gray-700 text-white border-2 border-white shadow-inner"
              />
              <input
                type="number"
                placeholder="Years of Experience"
                value={barberDetails.experience}
                onChange={(e) => setBarberDetails({ ...barberDetails, experience: e.target.value })}
                className="w-full p-3 rounded-md bg-gray-700 text-white border-2 border-white shadow-inner"
              />
              <input
                type="text"
                placeholder="Gender"
                value={barberDetails.gender}
                onChange={(e) => setBarberDetails({ ...barberDetails, gender: e.target.value })}
                className="w-full p-3 rounded-md bg-gray-700 text-white border-2 border-white shadow-inner"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={barberDetails.phoneNumber}
                onChange={(e) => setBarberDetails({ ...barberDetails, phoneNumber: e.target.value })}
                className="w-full p-3 rounded-md bg-gray-700 text-white border-2 border-white shadow-inner"
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border-2 border-white shadow-inner"
              />
              {barberDetails.profilePicture && (
                <img
                  src={barberDetails.profilePicture}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full mx-auto mt-4 border-2 border-white shadow-md"
                />
              )}
              <button
                onClick={handleButtonClick}
                className={`w-full py-3 rounded-md font-semibold text-black ${isActive ? 'bg-gold' : 'bg-gray-700'} border-2 border-white transition duration-300 ease-in-out hover:bg-gold hover:text-black shadow-md`}
              >
                {isEditMode ? 'Save Changes' : 'Add Barber'}
              </button>
            </div>
          </div>
        )}

        {successMessage && (
          <div className="mt-4 text-center text-white font-semibold text-lg bg-green-500 py-2 px-4 rounded-md shadow-lg">
            {successMessage}
          </div>
        )}

        {isViewFormVisible && (
          <div className="bg-black bg-opacity-80 p-8 rounded-lg border-2 border-white w-full max-w-2xl text-white mt-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-center text-gold mb-6">View Added Barbers</h3>
            <button
              onClick={handleViewBack}
              className="mb-6 w-32 py-2 rounded-md font-semibold text-black bg-gold border-2 border-white transition duration-300 ease-in-out hover:bg-yellow-500 shadow-md text-sm"
            >
              Back
            </button>

            {barbers.length > 0 ? (
              barbers.map((barber, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-80 p-4 rounded-lg mb-4 border border-white shadow-md">
                  <h4 className="text-lg font-semibold text-gold">Name: {barber.name}</h4>
                  <p><strong>Roles:</strong> {barber.roles}</p>
                  <p><strong>Age:</strong> {barber.age}</p>
                  <p><strong>Start Date:</strong> {barber.startDate}</p>
                  <p><strong>Experience:</strong> {barber.experience} years</p>
                  <p><strong>Gender:</strong> {barber.gender}</p>
                  <p><strong>Phone Number:</strong> {barber.phoneNumber}</p>
                  {barber.profilePicture && (
                    <img
                      src={barber.profilePicture}
                      alt={`${barber.name}'s profile`}
                      className="w-32 h-32 rounded-full border border-white mt-2 shadow-md"
                    />
                  )}
                  <div className="flex justify-between mt-4">
                    <button onClick={() => handleEditBarber(index)} className="px-4 py-2 bg-yellow-500 rounded-md font-semibold text-black hover:bg-yellow-400 shadow-md">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteBarber(index)} className="px-4 py-2 bg-red-600 rounded-md font-semibold text-white hover:bg-red-500 shadow-md">
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-lg font-semibold text-red-500">No barbers added yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBarbers;
