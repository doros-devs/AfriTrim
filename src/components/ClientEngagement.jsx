import React, { useState, useEffect } from 'react';

const ClientEngagement = () => {
  const [clients, setClients] = useState([
    { id: 1, name: 'John Doe', messages: [], feedback: 'Great service!', newMessage: false },
    { id: 2, name: 'Jane Smith', messages: [], feedback: 'Love the new haircut!', newMessage: false },
    { id: 3, name: 'Sam Wilson', messages: [], feedback: '', newMessage: false },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredClients, setFilteredClients] = useState(clients);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [activeTab, setActiveTab] = useState('promotions');
  const [promotion, setPromotion] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [notifications, setNotifications] = useState([]);

  const selectedClient = clients.find(client => client.id === selectedClientId);

  // Update filtered clients based on search query
  useEffect(() => {
    setFilteredClients(
      clients.filter(client => client.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, clients]);

  // Function to simulate receiving new messages from clients
  useEffect(() => {
    const interval = setInterval(() => {
      const randomClientId = Math.floor(Math.random() * clients.length) + 1;
      const message = { text: 'New message from client', fromOwner: false };
      setClients(prevClients =>
        prevClients.map(client =>
          client.id === randomClientId
            ? { ...client, newMessage: true, messages: [...client.messages, message] }
            : client
        )
      );
      // Add notification for the new message
      setNotifications(prev => [
        ...prev,
        { clientId: randomClientId, message: message.text }
      ]);
    }, 15000); // Simulate message every 15 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSendPromotion = () => {
    if (promotion.trim() && selectedClientId) {
      alert(`Promotion sent to ${selectedClient.name}: ${promotion}`);
      // Reset search after sending promotion
      setSearchQuery('');
      setFilteredClients([]);
      setSelectedClientId(null);
      setPromotion('');
    }
  };

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedClientId) {
      const updatedClients = clients.map(client =>
        client.id === selectedClientId
          ? { ...client, messages: [...client.messages, { text: messageInput, fromOwner: true }] }
          : client
      );
      setClients(updatedClients);
      setMessageInput('');
      // Reset search after sending message
      setSearchQuery('');
      setFilteredClients([]);
      setSelectedClientId(null);
    }
  };

  const handleNotificationClick = (clientId) => {
    setSelectedClientId(clientId);
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.clientId !== clientId)
    );
  };

  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-900">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-yellow-500">Client Engagement</h2>
          <div className="relative">
            {/* Notifications */}
            <span className="absolute top-0 right-0 bg-yellow-500 text-black rounded-full text-xs w-6 h-6 flex items-center justify-center">
              {notifications.length}
            </span>
            <ul className="bg-gray-800 rounded-md mt-2 max-h-40 overflow-y-auto">
              {notifications.map((notification, index) => (
                <li
                  key={index}
                  onClick={() => handleNotificationClick(notification.clientId)}
                  className="p-3 cursor-pointer"
                >
                  New message from {clients.find(client => client.id === notification.clientId).name}
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
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-700 text-white"
          />
          {searchQuery && (
            <ul className="bg-gray-800 rounded-md mt-2 max-h-40 overflow-y-auto">
              {filteredClients.map(client => (
                <li
                  key={client.id}
                  onClick={() => setSelectedClientId(client.id)}
                  className={`p-3 cursor-pointer ${client.id === selectedClientId ? 'bg-yellow-500 text-black' : 'bg-gray-700'}`}
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
                onClick={() => setActiveTab('promotions')}
                className={`px-4 py-2 rounded-md ${activeTab === 'promotions' ? 'bg-yellow-500 text-black' : 'bg-gray-700'}`}
              >
                Promotions
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className={`px-4 py-2 rounded-md ${activeTab === 'messages' ? 'bg-yellow-500 text-black' : 'bg-gray-700'}`}
              >
                Messages
              </button>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`px-4 py-2 rounded-md ${activeTab === 'feedback' ? 'bg-yellow-500 text-black' : 'bg-gray-700'}`}
              >
                Feedback
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'promotions' && (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Send Promotion to {selectedClient.name}</h2>
                <textarea
                  value={promotion}
                  onChange={(e) => setPromotion(e.target.value)}
                  placeholder="Write your promotion here..."
                  className="w-full p-4 rounded-md bg-gray-900 text-white"
                />
                <button
                  onClick={handleSendPromotion}
                  className="w-full mt-4 p-4 bg-yellow-500 text-black font-semibold rounded-md"
                >
                  Send Promotion
                </button>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Messages with {selectedClient.name}</h2>
                <div className="space-y-4 bg-gray-900 p-5 rounded-md shadow-md max-h-60 overflow-y-auto">
                  {selectedClient.messages.length > 0 ? (
                    selectedClient.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-md ${message.fromOwner ? 'bg-yellow-500 text-black' : 'bg-gray-800'}`}
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
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-4 bg-gray-900 rounded-md"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="p-4 bg-yellow-500 text-black rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'feedback' && (
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Client Feedback</h2>
                <p>{selectedClient.feedback || 'No feedback yet.'}</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-xl">Select a client to start engagement</div>
        )}
      </main>
    </div>
  );
};

export default ClientEngagement;
