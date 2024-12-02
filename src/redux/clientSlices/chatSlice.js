import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  newMessages: [],
  unreadMessages: 0,
  isTyping: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    addNewMessage: (state, action) => {
      state.newMessages.push(action.payload);
      state.unreadMessages += 1;
    },
    setTypingStatus: (state, action) => {
      state.isTyping = action.payload;
    },
    resetNewMessages: (state) => {
      state.unreadMessages = 0;
    },
  },
});

export const {
  addMessage,
  addNewMessage,
  setTypingStatus,
  resetNewMessages,
} = chatSlice.actions;

export default chatSlice.reducer;
