import React from "react";
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
} from "../redux/manageBarbersSlice"; // Updated imports
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
    successMessage,
    showButtons,
    isEditMode,
    searchQuery,
    showDeleteDialog,
  } = useSelector((state) => state.manageBarbers);

  const handleBack = () => navigate("/dashboard");

  const handleSaveBarber = () => {
    if (!barberDetails.name || !barberDetails.phoneNumber || !barberDetails.roles) {
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
        isEditMode !== false ? "Barber updated successfully!" : "Barber added successfully!"
      )
    );

    setTimeout(() => dispatch(setSuccessMessage("")), 2000);

    dispatch(setIsAddFormVisible(false));
    dispatch(setShowButtons(true));
  };

  const handleEditBarber = (index) => {
    dispatch(setBarberDetails(barbers[index]));
    dispatch(setIsAddFormVisible(true));
    dispatch(setShowButtons(false));
    dispatch(setIsEditMode(index));
  };

  const handleViewProfile = (index) => {
    dispatch(setBarberDetails(barbers[index]));
    dispatch(setIsViewFormVisible(true));
    dispatch(setShowButtons(false));
  };

  const filteredBarbers = barbers.filter((barber) =>
    barber.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-start bg-blackGray p-6">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-lightgold drop-shadow-md">
        Manage Barbers
      </h2>

      {showButtons && (
        <div className="flex flex-col items-center gap-6 mb-8 w-full max-w-xs">
          <button
            onClick={() => {
              dispatch(setIsAddFormVisible(true));
              dispatch(setIsViewFormVisible(false));
              dispatch(setShowButtons(false));
            }}
            className="w-full px-6 py-3 rounded-md font-semibold text-blackGray border-2 border-gold bg-gold shadow-md transition duration-300 ease-in-out hover:scale-105"
          >
            Add Barber
          </button>
          <button
            className="w-full px-6 py-3 rounded-md font-semibold text-blackGray border-2 border-gold bg-gold shadow-md transition duration-300 ease-in-out hover:scale-105"
          >
            View Barbers
          </button>
        </div>
      )}

      {isAddFormVisible && (
        <div className="bg-blackGray bg-opacity-80 p-8 rounded-lg w-full max-w-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-lightgold">
            {isEditMode !== false ? "Edit Barber" : "Add Barber"}
          </h3>
          <div className="mb-4">
            <label className="block text-lg font-medium text-lightGray">Name</label>
            <input
              type="text"
              value={barberDetails.name}
              onChange={(e) =>
                dispatch(setBarberDetails({ ...barberDetails, name: e.target.value }))
              }
              className="w-full p-4 rounded-md bg-darkGray text-lightGray mt-2"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-lightGray">Phone Number</label>
            <input
              type="tel"
              value={barberDetails.phoneNumber}
              onChange={(e) =>
                dispatch(setBarberDetails({ ...barberDetails, phoneNumber: e.target.value }))
              }
              className="w-full p-4 rounded-md bg-darkGray text-lightGray mt-2"
              placeholder="Enter phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-lightGray">Role</label>
            <input
              type="text"
              value={barberDetails.roles}
              onChange={(e) =>
                dispatch(setBarberDetails({ ...barberDetails, roles: e.target.value }))
              }
              className="w-full p-4 rounded-md bg-darkGray text-lightGray mt-2"
              placeholder="Enter role"
            />
          </div>

          <div className="flex justify-between gap-4">
            <button
              onClick={handleSaveBarber}
              className="w-1/2 px-6 py-3 bg-gold rounded-md text-blackGray font-semibold transition duration-300 ease-in-out hover:scale-105"
            >
              Save Barber
            </button>
            <button
              onClick={() => {
                dispatch(setIsAddFormVisible(false));
                dispatch(setShowButtons(true));
              }}
              className="w-1/2 px-6 py-3 bg-red-500 rounded-md text-lightGray font-semibold transition duration-300 ease-in-out hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {isViewFormVisible && (
        <div className="w-full max-w-xl bg-blackGray bg-opacity-80 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-lightgold">Barber Profile</h3>
          <div className="bg-darkGray p-4 rounded-lg">
            <p className="text-lightGray text-lg">
              <strong>Name:</strong> {barberDetails.name}
            </p>
            <p className="text-lightGray text-lg">
              <strong>Phone:</strong> {barberDetails.phoneNumber}
            </p>
            <p className="text-lightGray text-lg">
              <strong>Role:</strong> {barberDetails.roles}
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {
                dispatch(setIsViewFormVisible(false));
                dispatch(setShowButtons(true));
              }}
              className="px-4 py-2 bg-darkGray rounded-md text-lightGray"
            >
              Back
            </button>
            <button
              onClick={() => handleEditBarber()}
              className="px-4 py-2 bg-gold rounded-md text-blackGray"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBarbers;
