import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ScheduleSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [view, setView] = useState("schedule"); // Track active view: 'schedule' or 'appointments'
  const [appointments, setAppointments] = useState([
    { id: 1, date: "2024-11-22", time: "10:00 AM", client: "John Doe", status: "pending" },
    { id: 2, date: "2024-11-23", time: "1:00 PM", client: "Jane Smith", status: "pending" },
  ]);

  // Mock data for availability
  const availability = {
    "2024-11-22": [
      { time: "9:00 AM", status: "free" },
      { time: "10:00 AM", status: "occupied" },
      { time: "11:00 AM", status: "free" },
      { time: "12:00 PM", status: "occupied" },
    ],
    "2024-11-23": [
      { time: "10:00 AM", status: "occupied" },
      { time: "11:00 AM", status: "free" },
      { time: "12:00 PM", status: "free" },
    ],
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time on date change
  };

  const handleConfirmAppointment = (id) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id ? { ...appointment, status: "confirmed" } : appointment
      )
    );
  };

  const handleRejectAppointment = (id) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id ? { ...appointment, status: "rejected" } : appointment
      )
    );
  };

  const handleBookAppointment = () => {
    if (selectedTime) {
      const newAppointment = {
        id: appointments.length + 1,
        date: selectedDate.toISOString().split("T")[0],
        time: selectedTime,
        client: "New Client",
        status: "pending",
      };
      setAppointments((prev) => [...prev, newAppointment]);
      setSelectedTime(null); // Reset time selection after booking
    }
  };

  const formatDate = (date) => date.toISOString().split("T")[0];
  const slots = availability[formatDate(selectedDate)] || [];

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Navigation Menu */}
      <header className="bg-gray-900 text-yellow-400 py-4 px-6 shadow-md">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Barber Scheduler</h1>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => setView("schedule")}
                className={`transition ${
                  view === "schedule" ? "text-white" : "text-yellow-400 hover:text-white"
                }`}
              >
                My Schedule
              </button>
            </li>
            <li>
              <button
                onClick={() => setView("appointments")}
                className={`transition ${
                  view === "appointments" ? "text-white" : "text-yellow-400 hover:text-white"
                }`}
              >
                Appointments
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Conditional Rendering of Views */}
      {view === "schedule" ? (
        <ScheduleView
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          slots={slots}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          handleBookAppointment={handleBookAppointment}
          appointments={appointments}
        />
      ) : (
        <AppointmentsView
          appointments={appointments}
          handleConfirmAppointment={handleConfirmAppointment}
          handleRejectAppointment={handleRejectAppointment}
        />
      )}
    </div>
  );
};

// Schedule View Component
const ScheduleView = ({
  selectedDate,
  handleDateChange,
  slots,
  selectedTime,
  setSelectedTime,
  handleBookAppointment,
  appointments,
}) => {
  const confirmedAppointments = appointments.filter((appointment) => appointment.status === "confirmed");

  return (
    <section className="max-w-4xl mx-auto mt-8 p-6">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">Manage Schedule</h2>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
          className="bg-black text-white calendar"
        />
        <AvailabilitySlots slots={slots} setSelectedTime={setSelectedTime} />
        {selectedTime && (
          <div className="mt-4 text-lg text-yellow-400 font-semibold">Selected Time: {selectedTime}</div>
        )}
        <button
          className={`mt-6 w-full py-2 rounded-lg ${
            selectedTime
              ? "bg-yellow-400 text-black hover:bg-yellow-500"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          } transition-colors`}
          disabled={!selectedTime}
          onClick={handleBookAppointment}
        >
          Confirm Booking
        </button>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-yellow-400">Confirmed Appointments</h3>
          {confirmedAppointments.length > 0 ? (
            <ul>
              {confirmedAppointments.map((appointment) => (
                <li key={appointment.id} className="text-yellow-400">
                  {appointment.time} - {appointment.client}
                </li>
              ))}
            </ul>
          ) : (
            <p>No confirmed appointments yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

// Availability Slots Component
const AvailabilitySlots = ({ slots, setSelectedTime }) => (
  <div className="mt-6 space-y-3">
    <h3 className="text-lg font-semibold text-yellow-400">Available Slots</h3>
    {slots.length > 0 ? (
      slots.map((slot, index) => (
        <button
          key={index}
          className={`flex justify-between items-center w-full p-2 rounded-lg ${
            slot.status === "free"
              ? "bg-green-500 text-black hover:bg-green-400"
              : "bg-red-600 text-white"
          }`}
          onClick={() => (slot.status === "free" ? setSelectedTime(slot.time) : null)}
        >
          <span>{slot.time}</span>
          <span className="uppercase">{slot.status}</span>
        </button>
      ))
    ) : (
      <p className="text-gray-400">No availability for this date.</p>
    )}
  </div>
);

// Appointments View Component
const AppointmentsView = ({ appointments, handleConfirmAppointment, handleRejectAppointment }) => (
  <section className="max-w-4xl mx-auto mt-8 p-6">
    <h2 className="text-3xl font-bold text-yellow-400 mb-4">My Appointments</h2>
    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
      {appointments.length > 0 ? (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
            >
              <span>
                <span className="font-bold text-yellow-400">Date:</span> {appointment.date}
              </span>
              <span>
                <span className="font-bold text-yellow-400">Time:</span> {appointment.time}
              </span>
              <span>
                <span className="font-bold text-yellow-400">Client:</span> {appointment.client}
              </span>
              <span className="uppercase font-bold text-white">{appointment.status}</span>
              {appointment.status === "pending" && (
                <div className="space-x-2">
                  <button
                    className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-400"
                    onClick={() => handleConfirmAppointment(appointment.id)}
                  >
                    Confirm
                  </button>
                  <button
                    className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-500"
                    onClick={() => handleRejectAppointment(appointment.id)}
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No appointments yet.</p>
      )}
    </div>
  </section>
);

export default ScheduleSection;
