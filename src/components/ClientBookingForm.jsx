import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPhone,
  setSelectedBarber,
  setAppointmentDate,
  setAppointmentTime,
  bookAppointment,
  cancelAppointment,
} from "../redux/clientSlices/bookingSlice";

const BookingForm = ({
  selectedShop,
  selectedService,
  barber,
  onSubmit,
  onCancel,
}) => {
  const dispatch = useDispatch();
  const {
    phone,
    selectedBarber,
    appointmentDate,
    appointmentTime,
    appointmentBooked,
  } = useSelector((state) => state.booking);

  // Initialize state if no data is set
  useEffect(() => {
    if (!selectedBarber) {
      dispatch(setSelectedBarber(barber)); // Set initial barber if needed
    }
  }, [barber, selectedBarber, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAppointment());
    onSubmit({
      phone,
      shop: selectedShop.name,
      service: selectedService,
      barber: selectedBarber,
      date: appointmentDate,
      time: appointmentTime,
    });
  };

  const handleCancel = () => {
    dispatch(cancelAppointment());
    onCancel();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-blackGray p-6 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl text-center font-bold text-lightGray">
        {appointmentBooked ? "Appointment Booked!" : "Book Your Appointment"}
      </h2>

      {/* Phone Input */}
      <div>
        <label className="block text-lightGray">Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => dispatch(setPhone(e.target.value))}
          className="w-full p-3 rounded-lg text-black border border-mediumGray focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="Enter your phone number"
          disabled={appointmentBooked} // Disable inputs if appointment is booked
        />
      </div>

      {/* Select Barber */}
      <div>
        <label className="block text-lightGray">Select Barber:</label>
        <select
          value={selectedBarber}
          onChange={(e) => dispatch(setSelectedBarber(e.target.value))}
          className="w-full p-3 rounded-lg text-black border border-mediumGray focus:outline-none focus:ring-2 focus:ring-gold"
          disabled={appointmentBooked} // Disable select if appointment is booked
        >
          <option value={barber}>{barber}</option>
          <option value="Barber 2">Barber 2</option>
          <option value="Barber 3">Barber 3</option>
        </select>
      </div>

      {/* Date Picker */}
      <div>
        <label className="block text-lightGray">Select Date:</label>
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => dispatch(setAppointmentDate(e.target.value))}
          className="w-full p-3 rounded-lg text-black border border-mediumGray focus:outline-none focus:ring-2 focus:ring-gold"
          disabled={appointmentBooked} // Disable date picker if appointment is booked
        />
      </div>

      {/* Time Picker */}
      <div>
        <label className="block text-lightGray">Select Time:</label>
        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => dispatch(setAppointmentTime(e.target.value))}
          className="w-full p-3 rounded-lg text-black border border-mediumGray focus:outline-none focus:ring-2 focus:ring-gold"
          disabled={appointmentBooked} // Disable time picker if appointment is booked
        />
      </div>

      {/* Submit Button */}
      {!appointmentBooked ? (
        <button
          type="submit"
          className="w-full bg-gold text-black px-4 py-2 rounded-lg hover:bg-lightgold transition-colors duration-300"
        >
          Book Appointment
        </button>
      ) : (
        <div className="flex justify-center items-center space-x-4">
          <p className="text-lightGray">Your appointment is booked!</p>
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
