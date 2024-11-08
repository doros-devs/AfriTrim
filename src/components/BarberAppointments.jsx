import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BarberAppointments = () => {
  const navigate = useNavigate();

  // State for barbers and appointments data
  const [barbers, setBarbers] = useState([
    { id: 1, name: 'Barber John', appointments: [], totalBilled: 0, clientCount: 0, totalAppointments: 0, pendingAppointments: 0, canceledAppointments: 0 },
    { id: 2, name: 'Barber Mike', appointments: [], totalBilled: 0, clientCount: 0, totalAppointments: 0, pendingAppointments: 0, canceledAppointments: 0 },
    { id: 3, name: 'Barber Sarah', appointments: [], totalBilled: 0, clientCount: 0, totalAppointments: 0, pendingAppointments: 0, canceledAppointments: 0 },
  ]);
  const [appointmentsData, setAppointmentsData] = useState([
    { barberId: 1, clientName: 'John Doe', date: '2024-11-01', amountBilled: 30, canceled: false, pending: false },
    { barberId: 2, clientName: 'Jane Smith', date: '2024-11-01', amountBilled: 25, canceled: false, pending: false },
    { barberId: 1, clientName: 'Sam Wilson', date: '2024-11-02', amountBilled: 35, canceled: false, pending: true },
    { barberId: 3, clientName: 'Emily Davis', date: '2024-11-03', amountBilled: 40, canceled: true, pending: false },
    // More appointments...
  ]);
  const [loading, setLoading] = useState(true);  // Loading state

  // Calculate the appointments, total billed amount, and client count
  useEffect(() => {
    setLoading(true);  // Start loading
    const updatedBarbers = barbers.map((barber) => {
      const appointmentsForBarber = appointmentsData.filter(
        (appointment) => appointment.barberId === barber.id
      );
      const totalBilled = appointmentsForBarber.reduce(
        (sum, appointment) => sum + appointment.amountBilled,
        0
      );
      const clientCount = appointmentsForBarber.length;
      const totalAppointments = appointmentsForBarber.length;
      const pendingAppointments = appointmentsForBarber.filter(appointment => appointment.pending).length;
      const canceledAppointments = appointmentsForBarber.filter(appointment => appointment.canceled).length;

      return {
        ...barber,
        appointments: appointmentsForBarber,
        totalBilled,
        clientCount,
        totalAppointments,
        pendingAppointments,
        canceledAppointments
      };
    });

    setBarbers(updatedBarbers);  // Update the barbers data
    setLoading(false);  // Stop loading
  }, [appointmentsData, barbers]);

  if (loading) {
    return <div className="text-white text-center">Loading Barber Appointments...</div>;
  }

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col p-6 overflow-hidden relative"
      style={{
        backgroundImage: `url(/assets/images.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.85) contrast(1.2)', // Adjust brightness and contrast for a natural feel
      }}
    >
      {/* Navbar with a Back button aligned to the right */}
      <nav className="fixed top-0 left-0 right-0 p-6 bg-gray-900 text-white z-20 border-b-4 border-yellow-500">
        <button
          onClick={() => navigate('/dashboard')}
          className="absolute right-4 top-4 text-white border-2 border-white px-6 py-3 rounded-md transition-all hover:bg-white hover:text-black"
        >
          Back
        </button>
        <h1 className="text-3xl font-bold text-gold text-center">Barber Appointments Overview</h1>
      </nav>

      {/* Main Content */}
      <div className="mt-20 space-y-8 w-full">
        {barbers.map((barber) => (
          <div
            key={barber.id}
            className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white"
            style={{
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto',
              backgroundColor: '#333', // Dark background for cards
              borderRadius: '10px', // Rounded corners
              marginBottom: '20px', // Space between cards
            }}
          >
            <h2 className="text-2xl font-semibold text-golden hover:text-yellow-500 transition-colors duration-300">{barber.name}</h2>
            
            {/* Stats Section */}
            <div className="mt-4 text-lg text-gray-400">
              <p><strong>Total Appointments:</strong> {barber.totalAppointments}</p>
              <p><strong>Pending Appointments:</strong> {barber.pendingAppointments}</p>
              <p><strong>Canceled Appointments:</strong> {barber.canceledAppointments}</p>
              <p className="mt-2 text-lg text-yellow-400"><strong>Total Amount Billed:</strong> ${barber.totalBilled}</p>
            </div>

            {/* Appointments List */}
            <h3 className="mt-6 text-xl font-semibold text-golden">Appointments:</h3>
            <ul className="space-y-4 mt-2">
              {barber.appointments.length > 0 ? (
                barber.appointments.map((appointment, index) => (
                  <li key={index} className="bg-gray-700 p-4 rounded-md hover:bg-gray-600 transition-all duration-200">
                    <p className="text-lg font-semibold">
                      <strong>Client:</strong> {appointment.clientName}
                    </p>
                    <p className="text-gray-300">
                      <strong>Date:</strong> {appointment.date}
                    </p>
                    <p className="text-lg text-yellow-400">
                      <strong>Amount Billed:</strong> ${appointment.amountBilled}
                    </p>
                    {appointment.pending && (
                      <p className="text-blue-500 font-semibold mt-2">This appointment is pending.</p>
                    )}
                    {appointment.canceled && (
                      <p className="text-red-500 font-semibold mt-2">This appointment was canceled.</p>
                    )}
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No appointments this week.</p>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarberAppointments;
