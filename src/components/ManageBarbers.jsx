import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';

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
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleBack = () => navigate('/dashboard');

  const handleViewBack = () => {
    setIsViewFormVisible(false);
    setShowButtons(true);
  };

  const handleButtonClick = () => {
    if (!barberDetails.name || !barberDetails.phoneNumber || !barberDetails.roles) {
      alert("Please fill out all required fields");
      return;
    }

    if (isEditMode !== false) {
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
    setShowDeleteDialog(false);
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

  const filteredBarbers = barbers.filter((barber) =>
    barber.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-start bg-black p-6">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-white drop-shadow-md">Manage Barbers</h2>
      <div className="bg-black bg-opacity-80 p-6 rounded-lg w-full max-w-xl mb-6 text-white text-center shadow-lg">
        <h3 className="text-2xl font-semibold">Analytics</h3>
        <p className="text-lg">Total Barbers Added: {barbers.length}</p>
      </div>

      {showButtons && (
        <div className="flex flex-col items-center gap-6 mb-8 w-full max-w-xs">
          <button
            onClick={() => {
              setIsAddFormVisible(true);
              setIsViewFormVisible(false);
              setShowButtons(false);
            }}
            className="w-full px-6 py-3 rounded-md font-semibold text-white border-2 border-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md transition duration-300 ease-in-out hover:scale-105"
          >
            Add Barber
          </button>
          <button
            onClick={() => {
              setIsViewFormVisible(true);
              setIsAddFormVisible(false);
              setShowButtons(false);
            }}
            className="w-full px-6 py-3 rounded-md font-semibold text-white border-2 border-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md transition duration-300 ease-in-out hover:scale-105"
          >
            View Barbers
          </button>
        </div>
      )}

      {isAddFormVisible && (
        <div className="bg-black bg-opacity-80 p-8 rounded-lg w-full max-w-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">Add Barber</h3>
          <div className="mb-4">
            <label className="block text-lg font-medium text-white">Name</label>
            <input
              type="text"
              value={barberDetails.name}
              onChange={(e) => setBarberDetails({ ...barberDetails, name: e.target.value })}
              className="w-full p-4 rounded-md bg-gray-700 text-white mt-2"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-white">Phone Number</label>
            <input
              type="tel"
              value={barberDetails.phoneNumber}
              onChange={(e) => setBarberDetails({ ...barberDetails, phoneNumber: e.target.value })}
              className="w-full p-4 rounded-md bg-gray-700 text-white mt-2"
              placeholder="Enter phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-white">Role</label>
            <input
              type="text"
              value={barberDetails.roles}
              onChange={(e) => setBarberDetails({ ...barberDetails, roles: e.target.value })}
              className="w-full p-4 rounded-md bg-gray-700 text-white mt-2"
              placeholder="Enter role"
            />
          </div>

          <div className="flex justify-between gap-4">
            <button
              onClick={handleButtonClick}
              className="w-1/2 px-6 py-3 bg-yellow-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:scale-105"
            >
              Save Barber
            </button>
            <button
              onClick={() => {
                setIsAddFormVisible(false);
                setShowButtons(true);
              }}
              className="w-1/2 px-6 py-3 bg-red-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {isViewFormVisible && (
        <div className="w-full max-w-xl bg-black bg-opacity-80 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handleViewBack}
              className="px-4 py-2 bg-gray-600 text-white rounded-md"
            >
              Back
            </button>
            <h3 className="text-2xl font-semibold text-white">View Barbers</h3>
          </div>

          <div className="flex mb-4">
            <input
              type="text"
              className="p-3 w-full text-black"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="space-y-4">
            {filteredBarbers.map((barber, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 shadow-lg flex justify-between items-center">
                <div>
                  <p className="font-bold text-white">{barber.name}</p>
                  <p className="text-gray-400">{barber.roles}</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEditBarber(index)}
                    className="text-yellow-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setShowDeleteDialog(true) || setDeleteIndex(index)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showDeleteDialog && (
        <Dialog open={showDeleteDialog} onClose={() => setShowDeleteDialog(false)}>
          <Dialog.Panel className="bg-black bg-opacity-80 p-6 rounded-lg w-full max-w-sm">
            <Dialog.Title className="text-xl font-semibold text-white">Confirm Deletion</Dialog.Title>
            <Dialog.Description className="text-white mt-4">
              Are you sure you want to delete this barber?
            </Dialog.Description>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleDeleteBarber(deleteIndex)}
                className="px-4 py-2 bg-red-500 rounded-md text-white"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteDialog(false)}
                className="px-4 py-2 bg-gray-500 rounded-md text-white"
              >
                No, Cancel
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}

      {successMessage && (
        <div
          className={`p-4 mt-4 text-white text-center rounded-lg ${isActive ? 'bg-green-500' : 'bg-gray-600'}`}
        >
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default ManageBarbers;
