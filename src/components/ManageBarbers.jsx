// src/ManageBarbers.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBarbers,
  setBarberDetails,
  setIsAddFormVisible,
  setIsViewFormVisible,
  setSuccessMessage,
  setShowButtons,
  setIsEditMode,
  setSearchQuery,
  setShowDeleteDialog,
  setDeleteIndex,
  addBarber,
  updateBarber,
  deleteBarber,
} from "../redux/manageBarbersSlice"; // updated import
import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const ManageBarbers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    barbers,
    barberDetails,
    isAddFormVisible,
    isViewFormVisible,
    isActive,
    successMessage,
    showButtons,
    isEditMode,
    searchQuery,
    showDeleteDialog,
    deleteIndex,
  } = useSelector((state) => state.manageBarbers); // updated selector

  const handleBack = () => navigate("/dashboard");

  const handleViewBack = () => {
    dispatch(setIsViewFormVisible(false));
    dispatch(setShowButtons(true));
  };

  const handleButtonClick = () => {
    if (
      !barberDetails.name ||
      !barberDetails.phoneNumber ||
      !barberDetails.roles
    ) {
      alert("Please fill out all required fields");
      return;
    }

    if (isEditMode !== false) {
      dispatch(updateBarber());
    } else {
      dispatch(addBarber());
    }

    dispatch(
      setSuccessMessage(
        isEditMode
          ? "Barber updated successfully!"
          : "Barber added successfully!"
      )
    );
    setTimeout(() => dispatch(setSuccessMessage("")), 2000);
  };

  const handleDeleteBarber = () => {
    dispatch(deleteBarber());
  };

  const handleEditBarber = (index) => {
    dispatch(setBarberDetails(barbers[index]));
    dispatch(setIsAddFormVisible(true));
    dispatch(setShowButtons(false));
    dispatch(setIsEditMode(index));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(
        setBarberDetails({ ...barberDetails, profilePicture: reader.result })
      );
    };
    if (file) reader.readAsDataURL(file);
  };

  const filteredBarbers = barbers.filter((barber) =>
    barber.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-start bg-black p-6">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-white drop-shadow-md">
        Manage Barbers
      </h2>
      <div className="bg-black bg-opacity-80 p-6 rounded-lg w-full max-w-xl mb-6 text-white text-center shadow-lg">
        <h3 className="text-2xl font-semibold">Analytics</h3>
        <p className="text-lg">Total Barbers Added: {barbers.length}</p>
      </div>

      {showButtons && (
        <div className="flex flex-col items-center gap-6 mb-8 w-full max-w-xs">
          <button
            onClick={() => {
              dispatch(setIsAddFormVisible(true));
              dispatch(setIsViewFormVisible(false));
              dispatch(setShowButtons(false));
            }}
            className="w-full px-6 py-3 rounded-md font-semibold text-white border-2 border-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md transition duration-300 ease-in-out hover:scale-105"
          >
            Add Barber
          </button>
          <button
            onClick={() => {
              dispatch(setIsViewFormVisible(true));
              dispatch(setIsAddFormVisible(false));
              dispatch(setShowButtons(false));
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
              onChange={(e) =>
                dispatch(
                  setBarberDetails({ ...barberDetails, name: e.target.value })
                )
              }
              className="w-full p-4 rounded-md bg-gray-700 text-white mt-2"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-white">
              Phone Number
            </label>
            <input
              type="tel"
              value={barberDetails.phoneNumber}
              onChange={(e) =>
                dispatch(
                  setBarberDetails({
                    ...barberDetails,
                    phoneNumber: e.target.value,
                  })
                )
              }
              className="w-full p-4 rounded-md bg-gray-700 text-white mt-2"
              placeholder="Enter phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-white">Role</label>
            <input
              type="text"
              value={barberDetails.roles}
              onChange={(e) =>
                dispatch(
                  setBarberDetails({ ...barberDetails, roles: e.target.value })
                )
              }
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
                dispatch(setIsAddFormVisible(false));
                dispatch(setShowButtons(true));
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
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
          </div>
          <div className="space-y-4">
            {filteredBarbers.map((barber, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg p-4 shadow-lg flex justify-between items-center"
              >
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
                    onClick={() =>
                      dispatch(setShowDeleteDialog(true)) ||
                      dispatch(setDeleteIndex(index))
                    }
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
        <Dialog
          open={showDeleteDialog}
          onClose={() => dispatch(setShowDeleteDialog(false))}
        >
          <Dialog.Panel className="bg-black bg-opacity-80 p-6 rounded-lg w-full max-w-sm">
            <Dialog.Title className="text-xl font-semibold text-white">
              Confirm Deletion
            </Dialog.Title>
            <Dialog.Description className="text-white mt-4">
              Are you sure you want to delete this barber?
            </Dialog.Description>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleDeleteBarber}
                className="px-4 py-2 bg-red-500 rounded-md text-white"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => dispatch(setShowDeleteDialog(false))}
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
          className={`p-4 mt-4 text-white text-center rounded-lg ${
            isActive ? "bg-green-500" : "bg-gray-600"
          }`}
        >
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default ManageBarbers;
