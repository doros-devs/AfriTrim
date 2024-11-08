import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import backgroundImage from '../assets/istockphoto-1441548723-612x612.jpg';

const ClientEngagement = () => {
  const [messages, setMessages] = useState([]);
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'Great service!', client: 'John Doe', reply: '' },
    { id: 2, text: 'Love the new haircut!', client: 'Jane Smith', reply: '' }
  ]);
  const [promotion, setPromotion] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  
  const navigate = useNavigate();

  const clients = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Sam Wilson' },
  ];

  const handleSendPromotion = () => {
    if (promotion.trim() && selectedClient) {
      alert(`Promotion sent to ${selectedClient}: ${promotion}`);
      setPromotion('');
    }
  };

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedClient) {
      setMessages([...messages, { text: messageInput, fromOwner: true, client: selectedClient }]);
      setMessageInput('');
    }
  };

  const handleReplyChange = (index, value) => {
    const updatedFeedback = [...feedback];
    updatedFeedback[index].reply = value;
    setFeedback(updatedFeedback);
  };

  const handleReplySubmit = (index) => {
    if (feedback[index].reply.trim()) {
      alert(`Reply sent to ${feedback[index].client}: ${feedback[index].reply}`);
      const updatedFeedback = [...feedback];
      updatedFeedback[index].reply = '';
      setFeedback(updatedFeedback);
    }
  };

  const handleBackButtonClick = () => {
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div
      className="min-h-screen bg-black text-white p-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background overlay for darker effect */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full">
        {/* Navbar */}
        <div className="flex justify-between items-center p-6 bg-gray-900 shadow-lg rounded-md mb-12">
          <h1 className="text-4xl font-bold text-gold">Client Engagements</h1>
          <button
            onClick={handleBackButtonClick}
            className="p-4 border border-white rounded hover:bg-gray-700 transition transform hover:scale-105 shadow-sm"
          >
            Back
          </button>
        </div>

        {/* Client Selection */}
        <div className="mb-8 max-w-lg mx-auto">
          <h2 className="text-3xl font-semibold text-gold mb-4">Choose Client</h2>
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="w-full p-4 bg-gray-900 text-white rounded-md shadow-md"
          >
            <option value="">Select a client...</option>
            {clients.map(client => (
              <option key={client.id} value={client.name}>{client.name}</option>
            ))}
          </select>
        </div>

        {/* Promotions Section */}
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gold mb-6">Send Promotions</h2>
          <textarea
            value={promotion}
            onChange={(e) => setPromotion(e.target.value)}
            placeholder="Write your promotion here..."
            className="w-full p-5 rounded-md bg-gray-900 text-white focus:outline-none focus:border-gold transition-transform transform hover:scale-105 shadow-md"
          />
          <button
            onClick={handleSendPromotion}
            className="w-full mt-6 p-4 bg-gold text-black font-semibold rounded-md transition-colors duration-200 hover:bg-yellow-600 shadow-lg"
          >
            Send Promotion
          </button>
        </div>

        {/* Messages Section */}
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gold mb-6">Messages</h2>
          <div className="space-y-4 max-h-60 overflow-y-auto bg-gray-900 p-5 rounded-md shadow-md">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4 rounded-md transition-transform transform ${message.fromOwner ? 'bg-gold text-black' : 'bg-gray-800 text-white'}`}
              >
                {message.client}: {message.text}
              </div>
            ))}
          </div>
          <div className="mt-6 flex space-x-4">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-4 rounded-md bg-gray-900 text-white focus:outline-none focus:border-gold transition-transform transform hover:scale-105 shadow-md"
            />
            <button
              onClick={handleSendMessage}
              className="p-4 bg-gold text-black font-semibold rounded-md transition-colors duration-200 hover:bg-yellow-600 shadow-lg"
            >
              Send
            </button>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gold mb-6">Client Feedback</h2>
          <ul className="space-y-6 bg-gray-900 p-5 rounded-md shadow-md max-h-60 overflow-y-auto">
            {feedback.map((fb, index) => (
              <li key={index} className="p-4 rounded-md bg-gray-800 text-white shadow-md transition-transform transform hover:scale-105">
                <p className="mb-4">{fb.client}: {fb.text}</p>
                <input
                  type="text"
                  value={fb.reply}
                  onChange={(e) => handleReplyChange(index, e.target.value)}
                  placeholder="Write a reply..."
                  className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:border-gold mb-4"
                />
                <button
                  onClick={() => handleReplySubmit(index)}
                  className="w-full p-3 bg-gold text-black font-semibold rounded-md transition-colors duration-200 hover:bg-yellow-600 shadow-sm"
                >
                  Send Reply
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientEngagement;
