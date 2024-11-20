// src/ClientEngagement.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  setSelectedClientId,
  setActiveTab,
  setPromotion,
  setMessageInput,
  sendPromotion,
  sendMessage,
  receiveNewMessage,
  addNotification,
  clearNotification,
} from "../redux/clientEngagementSlice";

const ClientEngagement = () => {
  const dispatch = useDispatch();
  const {
    clients,
    searchQuery,
    filteredClients,
    selectedClientId,
    activeTab,
    promotion,
    messageInput,
    notifications,
  } = useSelector((state) => state.clientEngagement);

  const selectedClient = clients.find(
    (client) => client.id === selectedClientId
  );

  // Handle new messages (simulating with an interval)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomClientId = Math.floor(Math.random() * clients.length) + 1;
      const message = { text: "New message from client", fromOwner: false };
      dispatch(receiveNewMessage({ clientId: randomClientId, message }));
    }, 15000); // Simulate message every 15 seconds

    return () => clearInterval(interval);
  }, [dispatch, clients]);

  const handleSearchQueryChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSendPromotion = () => {
    dispatch(sendPromotion());
    dispatch(setSearchQuery(""));
    dispatch(setSelectedClientId(null));
  };

  const handleSendMessage = () => {
    dispatch(sendMessage());
    dispatch(setSearchQuery(""));
    dispatch(setSelectedClientId(null));
  };

  const handleNotificationClick = (clientId) => {
    dispatch(setSelectedClientId(clientId));
    dispatch(clearNotification(clientId));
  };

  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-900">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gold">
            Client Engagement
          </h2>
          <div className="relative">
            {/* Notifications */}
            <span className="absolute top-0 right-0 bg-gold text-black rounded-full text-xs w-6 h-6 flex items-center justify-center">
              {notifications.length}
            </span>
            <ul className="bg-gray-800 rounded-md mt-2 max-h-40 overflow-y-auto">
              {notifications.map((notification, index) => (
                <li
                  key={index}
                  onClick={() => handleNotificationClick(notification.clientId)}
                  className="p-3 cursor-pointer"
                >
                  New message from{" "}
                  {
                    clients.find(
                      (client) => client.id === notification.clientId
                    ).name
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search clients..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="w-full p-3 rounded-md bg-gray-700 text-white"
          />
          {searchQuery && (
            <ul className="bg-gray-800 rounded-md mt-2 max-h-40 overflow-y-auto">
              {filteredClients.map((client) => (
                <li
                  key={client.id}
                  onClick={() => dispatch(setSelectedClientId(client.id))}
                  className={`p-3 cursor-pointer ${
                    client.id === selectedClientId
                      ? "bg-gold text-black"
                      : "bg-gray-700"
                  }`}
                >
                  {client.name}
                  {client.newMessage && (
                    <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tabs */}
        {selectedClient ? (
          <>
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => dispatch(setActiveTab("promotions"))}
                className={`px-4 py-2 rounded-md ${
                  activeTab === "promotions"
                    ? "bg-gold text-black"
                    : "bg-gray-700"
                }`}
              >
                Promotions
              </button>
              <button
                onClick={() => dispatch(setActiveTab("messages"))}
                className={`px-4 py-2 rounded-md ${
                  activeTab === "messages"
                    ? "bg-gold text-black"
                    : "bg-gray-700"
                }`}
              >
                Messages
              </button>
              <button
                onClick={() => dispatch(setActiveTab("feedback"))}
                className={`px-4 py-2 rounded-md ${
                  activeTab === "feedback"
                    ? "bg-gold text-black"
                    : "bg-gray-700"
                }`}
              >
                Feedback
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "promotions" && (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gold mb-4">
                  Send Promotion to {selectedClient.name}
                </h2>
                <textarea
                  value={promotion}
                  onChange={(e) => dispatch(setPromotion(e.target.value))}
                  placeholder="Write your promotion here..."
                  className="w-full p-4 rounded-md bg-gray-900 text-white"
                />
                <button
                  onClick={handleSendPromotion}
                  className="w-full mt-4 p-4 bg-gold text-black font-semibold rounded-md"
                >
                  Send Promotion
                </button>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gold mb-4">
                  Messages with {selectedClient.name}
                </h2>
                <div className="space-y-4 bg-gray-900 p-5 rounded-md shadow-md max-h-60 overflow-y-auto">
                  {selectedClient.messages.length > 0 ? (
                    selectedClient.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-md ${
                          message.fromOwner
                            ? "bg-gold text-black"
                            : "bg-gray-800"
                        }`}
                      >
                        {message.text}
                      </div>
                    ))
                  ) : (
                    <p>No messages yet.</p>
                  )}
                </div>
                <div className="flex mt-4 space-x-4">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => dispatch(setMessageInput(e.target.value))}
                    placeholder="Type a message..."
                    className="flex-1 p-4 bg-gray-900 rounded-md"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="p-4 bg-gold text-black rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
            )}

            {activeTab === "feedback" && (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gold mb-4">
                  Client Feedback
                </h2>
                <p>{selectedClient.feedback || "No feedback yet."}</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-xl">
            Select a client to start engagement
          </div>
        )}
      </main>
    </div>
  );
};

export default ClientEngagement;
