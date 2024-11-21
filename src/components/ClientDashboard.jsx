import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  setActiveTab,
  setSearch,
  setSelectedShop,
  setSelectedService,
  setAppointmentDetails,
  setPaymentInitialized,
  addMessage,
  resetState,
} from "../redux/clientSlices/clientDashboardSlice";
import SearchShops from "./ClientSearchShops";
import ServiceSelection from "./ClientServiceSelection";
import BookingForm from "./ClientBookingForm";
import PaymentForm from "./ClientPaymentForm";
import ReviewComponent from "./ClientReviewComponent";
import Chatbox from "./ClientChatbox";

// Sidebar icons (You can replace with actual SVGs or icons from a library like FontAwesome)
const SidebarIcon = ({ icon, label, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`flex items-center p-4 space-x-3 hover:bg-yellow-500 transition-colors duration-300 text-lg ${
      isActive ? "bg-gold" : "text-lightgold"
    }`}
  >
    {icon}
    <span className="hidden md:block">{label}</span>
  </button>
);

const ClientDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const {
    activeTab,
    search,
    selectedShop,
    selectedService,
    barber,
    appointmentDetails,
    paymentInitialized,
    messages,
  } = useSelector((state) => state.clientDashboard);

  // Sample data for shops (this would be fetched from an API or a database)
  const shops = [
    { id: 1, name: "Barbershop One", location: "Nairobi" },
    { id: 2, name: "Barbershop Two", location: "Mombasa" },
    { id: 3, name: "Haircut Hub", location: "Kisumu" },
    { id: 4, name: "The Grooming Lounge", location: "Nakuru" },
  ];

  // Handlers for actions
  const handleSelectShop = (shop) => {
    dispatch(setSelectedShop(shop));
    dispatch(setActiveTab("serviceSelection"));
  };

  const handleSelectService = (service) => {
    dispatch(setSelectedService(service));
    dispatch(setActiveTab("booking"));
  };

  const handleBooking = (details) => {
    dispatch(setAppointmentDetails(details));
    dispatch(setPaymentInitialized(true)); // Proceed to payment after booking
    dispatch(setActiveTab("booking"));
  };

  const handlePayment = (paymentInfo) => {
    alert(
      `Payment of ${paymentInfo.amount} received from ${paymentInfo.phone}. Thank you!`
    );
    dispatch(setActiveTab("review"));
  };

  const handleSendMessage = (message) => {
    dispatch(addMessage(message));
  };

  const resetStateHandler = () => {
    dispatch(resetState());
  };

  const renderContent = () => {
    switch (activeTab) {
      case "search":
        return (
          <SearchShops
            search={search}
            setSearch={(value) => dispatch(setSearch(value))}
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
        return (
          <Chatbox messages={messages} onSendMessage={handleSendMessage} />
        );
      case "review":
        return (
          <ReviewComponent
            onSubmitReview={(review) =>
              alert(
                `Review submitted: ${review.reviewText}, Rating: ${review.rating}`
              )
            }
          />
        );
      case "booking":
        if (
          selectedShop &&
          selectedService &&
          barber &&
          !appointmentDetails &&
          !paymentInitialized
        ) {
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
          return (
            <PaymentForm
              phone={appointmentDetails.phone}
              onPayment={handlePayment}
            />
          );
        }
        return <div>Please select a service to book.</div>;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-blackGray text-white overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-black p-4 flex justify-between items-center text-yellow-500 fixed top-0 left-0 right-0 z-10">
        {/* Title */}
        <div className="text-xl font-bold">Client Dashboard</div>

        {/* Logout Button */}
        <button
          onClick={() => navigate("/")} // Use navigate to redirect to the root page
          className="bg-gold text-black px-6 py-2 rounded-md hover:bg-lightgold transition-colors duration-300"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 ml-12 md:ml-48 mt-20 md:mt-16">
        {renderContent()}
      </main>

      {/* Sidebar */}
      <aside className="w-16 md:w-48 bg-blackGray flex flex-col items-center justify-start text-lg fixed top-16 left-0 z-10 h-full">
        <SidebarIcon
          icon={<span>🔍</span>}
          label="Search"
          onClick={() => dispatch(setActiveTab("search"))}
          isActive={activeTab === "search"}
        />
        <SidebarIcon
          icon={<span>💬</span>}
          label="Chat"
          onClick={() => dispatch(setActiveTab("chat"))}
          isActive={activeTab === "chat"}
        />
        <SidebarIcon
          icon={<span>✍️</span>}
          label="Review"
          onClick={() => dispatch(setActiveTab("review"))}
          isActive={activeTab === "review"}
        />
        <SidebarIcon
          icon={<span>📅</span>}
          label="Booking"
          onClick={() => dispatch(setActiveTab("booking"))}
          isActive={activeTab === "booking"}
        />
        <SidebarIcon
          icon={<span>🔄</span>}
          label="Reset"
          onClick={resetStateHandler}
          isActive={false}
        />
      </aside>
    </div>
  );
};

export default ClientDashboard;
