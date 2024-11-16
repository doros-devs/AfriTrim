import React, { useState } from "react";
import BookingForm from "./BookingForm";
import Chatbox from "./Chatbox";
import PaymentForm from "./PaymentForm";
import ReviewComponent from "./ReviewComponent";
import ServiceSelection from "./ServiceSelection";

// Sidebar icons (You can replace with actual SVGs or icons from a library like FontAwesome)
const SidebarIcon = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center p-4 space-x-3 hover:bg-yellow-500 transition-colors duration-300 text-white text-lg"
  >
    {icon}
    <span className="hidden md:block">{label}</span>
  </button>
);

const SearchShops = ({ search, setSearch, handleSelectShop, shops }) => {
  // Filter shops based on the search query
  const filteredShops = shops.filter(shop => 
    shop.name.toLowerCase().includes(search.toLowerCase()) || 
    shop.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search for shops..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 w-full rounded-md text-black"
      />
      {filteredShops.length > 0 ? (
        filteredShops.map((shop) => (
          <div
            key={shop.id}
            onClick={() => handleSelectShop(shop)}
            className="p-4 border-b border-gray-600 hover:bg-yellow-500 cursor-pointer"
          >
            <h3 className="font-bold">{shop.name}</h3>
            <p>{shop.location}</p>
          </div>
        ))
      ) : (
        <div className="text-gray-500">No shops found</div>
      )}
    </div>
  );
};

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("search");
  const [search, setSearch] = useState("");
  const [selectedShop, setSelectedShop] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [barber, setBarber] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [paymentInitialized, setPaymentInitialized] = useState(false);
  const [messages, setMessages] = useState([]);

  // Sample data for shops (this would be fetched from an API or a database)
  const shops = [
    { id: 1, name: "Barbershop One", location: "Nairobi" },
    { id: 2, name: "Barbershop Two", location: "Mombasa" },
    { id: 3, name: "Haircut Hub", location: "Kisumu" },
    { id: 4, name: "The Grooming Lounge", location: "Nakuru" },
  ];

  // Handlers for actions
  const handleSelectShop = (shop) => {
    setSelectedShop(shop);
    setSelectedService(null); // Reset the selected service
    setBarber(""); // Reset barber
    setActiveTab("serviceSelection"); // Direct to service selection
  };

  const handleSelectService = (service) => {
    setSelectedService(service.name);
    setBarber(service.barber);
    setActiveTab("booking"); // After selecting service, go directly to booking
  };

  const handleBooking = (details) => {
    setAppointmentDetails(details);
    setPaymentInitialized(true); // Proceed to payment after booking
    setActiveTab("booking"); // Direct to booking (payment section)
  };

  const handlePayment = (paymentInfo) => {
    alert(`Payment of ${paymentInfo.amount} received from ${paymentInfo.phone}. Thank you!`);
    setActiveTab("review"); // After payment, go directly to review
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  const resetState = () => {
    setPaymentInitialized(false);
    setSelectedShop(null);
    setSelectedService(null);
    setBarber("");
    setAppointmentDetails(null);
    setActiveTab("search"); // Reset to search tab
  };

  const renderContent = () => {
    switch (activeTab) {
      case "search":
        return (
          <SearchShops
            search={search}
            setSearch={setSearch}
            handleSelectShop={handleSelectShop}
            shops={shops}
          />
        );
      case "serviceSelection":
        return (
          <ServiceSelection
            selectedShop={selectedShop}
            handleSelectService={handleSelectService}
          />
        );
      case "chat":
        return <Chatbox messages={messages} onSendMessage={handleSendMessage} />;
      case "review":
        return <ReviewComponent onSubmitReview={(review) => alert(`Review submitted: ${review.reviewText}, Rating: ${review.rating}`)} />;
      case "booking":
        if (selectedShop && selectedService && barber && !appointmentDetails && !paymentInitialized) {
          return (
            <BookingForm
              selectedShop={selectedShop}
              selectedService={selectedService}
              barber={barber}
              onSubmit={handleBooking}
            />
          );
        }
        if (paymentInitialized && appointmentDetails) {
          return <PaymentForm phone={appointmentDetails.phone} onPayment={handlePayment} />;
        }
        return <div>Please select a service to book.</div>;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-black p-4 flex justify-between items-center text-yellow-500 fixed top-0 left-0 right-0 z-10">
        {/* Title */}
        <div className="text-xl font-bold">Client Dashboard</div>
        
        {/* Logout Button */}
        <button
          onClick={() => alert('Logging out...')}
          className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-red-300 transition-colors duration-300"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 ml-12 md:ml-48 mt-20 md:mt-16">{renderContent()}</main>

      {/* Sidebar */}
      <aside className="w-16 md:w-48 bg-black flex flex-col items-center justify-start text-lg fixed top-16 left-0 z-10 h-full">
        <SidebarIcon
          icon={<span>🔍</span>}
          label="Search"
          onClick={() => setActiveTab("search")}
        />
        <SidebarIcon
          icon={<span>💬</span>}
          label="Chat"
          onClick={() => setActiveTab("chat")}
        />
        <SidebarIcon
          icon={<span>✍️</span>}
          label="Review"
          onClick={() => setActiveTab("review")}
        />
        <SidebarIcon
          icon={<span>📅</span>}
          label="Booking"
          onClick={() => setActiveTab("booking")}
        />
        <SidebarIcon
          icon={<span>🔄</span>}
          label="Reset"
          onClick={resetState}
        />
      </aside>
    </div>
  );
};

export default ClientDashboard;
