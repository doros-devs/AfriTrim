import React, { useState } from "react";

const BookingForm = ({ selectedShop, selectedService, barber, onSubmit, onCancel }) => {
  const [phone, setPhone] = useState("");
  const [selectedBarber, setSelectedBarber] = useState(barber);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentBooked, setAppointmentBooked] = useState(false); // Track if appointment is booked

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      phone,
      shop: selectedShop.name,
      service: selectedService,
      barber: selectedBarber,
      date: appointmentDate,
      time: appointmentTime,
    });
    setAppointmentBooked(true); // Mark the appointment as booked
  };

  const handleCancel = () => {
    setPhone("");
    setAppointmentDate("");
    setAppointmentTime("");
    setAppointmentBooked(false); // Reset the state
    onCancel(); // Trigger the cancel handler
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl text-center font-bold text-white">
        {appointmentBooked ? "Appointment Booked!" : "Book Your Appointment"}
      </h2>

      {/* Phone Input */}
      <div>
        <label className="block text-white">Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Enter your phone number"
          disabled={appointmentBooked} // Disable inputs if appointment is booked
        />
      </div>

      {/* Select Barber */}
      <div>
        <label className="block text-white">Select Barber:</label>
        <select
          value={selectedBarber}
          onChange={(e) => setSelectedBarber(e.target.value)}
          className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          disabled={appointmentBooked} // Disable select if appointment is booked
        >
          <option value={barber}>{barber}</option>
          <option value="Barber 2">Barber 2</option>
          <option value="Barber 3">Barber 3</option>
        </select>
      </div>

      {/* Date Picker */}
      <div>
        <label className="block text-white">Select Date:</label>
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          disabled={appointmentBooked} // Disable date picker if appointment is booked
        />
      </div>

      {/* Time Picker */}
      <div>
        <label className="block text-white">Select Time:</label>
        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          className="w-full p-3 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          disabled={appointmentBooked} // Disable time picker if appointment is booked
        />
      </div>

      {/* Submit Button */}
      {!appointmentBooked ? (
        <button
          type="submit"
          className="w-full bg-yellow-600 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
        >
          Book Appointment
        </button>
      ) : (
        <div className="flex justify-center items-center space-x-4">
          <p className="text-white">Your appointment is booked!</p>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors duration-300"
          >
            Cancel Appointment
          </button>
        </div>
      )}
    </form>
  );
};

export default BookingForm;
