import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessage,
  addNewMessage,
  setTypingStatus,
  resetNewMessages,
} from "../redux/clientSlices/chatSlice";
import io from "socket.io-client";

// Simulating socket connection (replace with your server URL)
const socket = io("http://localhost:5173");

const Chatbox = () => {
  const dispatch = useDispatch();
  const { messages, newMessages, unreadMessages, isTyping } = useSelector(
    (state) => state.chat
  );
  const [message, setMessage] = useState("");
  const chatRef = useRef(null);

  // Scroll to the bottom when new messages are received
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, newMessages]);

  // Listening for incoming messages and typing status
  useEffect(() => {
    socket.on("newMessage", (msg) => {
      dispatch(addNewMessage(msg));
    });

    socket.on("typing", (username) => {
      dispatch(setTypingStatus(true));
      setTimeout(() => {
        dispatch(setTypingStatus(false));
      }, 1000); // Stop typing indicator after 1 second
    });

    return () => {
      socket.off("newMessage");
      socket.off("typing");
    };
  }, [dispatch]);

  const handleSend = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", message); // Emit message through socket
    dispatch(addMessage(message));
    setMessage("");
    dispatch(resetNewMessages()); // Reset unread messages when the user sends a message
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    socket.emit("typing", "User"); // Notify others that the user is typing
  };

  return (
    <div className="chatbox-container p-4 bg-blackGray rounded-lg max-w-xl mx-auto relative">
      <div
        className="messages space-y-2 overflow-y-auto max-h-80 mb-4"
        ref={chatRef}
      >
        {/* Render both old and new messages */}
        {messages.concat(newMessages).map((msg, index) => (
          <div key={index} className="p-2 bg-gray-800 rounded">
            {msg}
          </div>
        ))}
        {isTyping && <div className="text-lightGray">Someone is typing...</div>}
      </div>

      {/* Notification Badge for unread messages */}
      {unreadMessages > 0 && (
        <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 text-xs">
          {unreadMessages}
        </div>
      )}

      {/* Input form for typing a message */}
      <form onSubmit={handleSend} className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={handleTyping}
          className="flex-1 p-2 rounded text-black border border-mediumGray focus:ring-2 focus:ring-gold"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-gold text-black px-4 py-2 rounded hover:bg-lightgold transition-colors duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
