// chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  messages: [], // Array to store messages
  newMessages: [], // Array for newly incoming messages
  unreadMessages: 0, // Unread messages counter
  isTyping: false, // Typing status
};

// Create slice
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // Action to add a new message
    addMessage: (state, action) => {
      state.messages.push(action.payload);
      state.unreadMessages = 0; // Reset unread messages count when the user sends a message
    },
    // Action to add a new incoming message
    addNewMessage: (state, action) => {
      state.newMessages.push(action.payload);
      state.unreadMessages += 1; // Increment unread messages count
    },
    // Action to update typing status
    setTypingStatus: (state, action) => {
      state.isTyping = action.payload;
    },
    // Action to reset new messages (after user reads them)
    resetNewMessages: (state) => {
      state.newMessages = [];
      state.unreadMessages = 0;
    },
  },
});

// Export actions
export const { addMessage, addNewMessage, setTypingStatus, resetNewMessages } =
  chatSlice.actions;

// Export reducer
export default chatSlice.reducer;
