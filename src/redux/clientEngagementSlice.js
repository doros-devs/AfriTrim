// src/redux/clientEngagementSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [
    {
      id: 1,
      name: "John Doe",
      messages: [],
      feedback: "Great service!",
      newMessage: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      messages: [],
      feedback: "Love the new haircut!",
      newMessage: false,
    },
    {
      id: 3,
      name: "Sam Wilson",
      messages: [],
      feedback: "",
      newMessage: false,
    },
  ],
  searchQuery: "",
  filteredClients: [],
  selectedClientId: null,
  activeTab: "promotions", // Default active tab
  promotion: "",
  messageInput: "",
  notifications: [],
};

const clientEngagementSlice = createSlice({
  name: "clientEngagement",
  initialState,
  reducers: {
    setClients: (state, action) => {
      state.clients = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredClients = state.clients.filter((client) =>
        client.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    setSelectedClientId: (state, action) => {
      state.selectedClientId = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setPromotion: (state, action) => {
      state.promotion = action.payload;
    },
    setMessageInput: (state, action) => {
      state.messageInput = action.payload;
    },
    sendPromotion: (state) => {
      const selectedClient = state.clients.find(
        (client) => client.id === state.selectedClientId
      );
      if (selectedClient && state.promotion.trim()) {
        alert(`Promotion sent to ${selectedClient.name}: ${state.promotion}`);
        state.promotion = ""; // Reset promotion input
      }
    },
    sendMessage: (state) => {
      const selectedClient = state.clients.find(
        (client) => client.id === state.selectedClientId
      );
      if (selectedClient && state.messageInput.trim()) {
        const updatedClients = state.clients.map((client) =>
          client.id === state.selectedClientId
            ? {
                ...client,
                messages: [
                  ...client.messages,
                  { text: state.messageInput, fromOwner: true },
                ],
              }
            : client
        );
        state.clients = updatedClients;
        state.messageInput = ""; // Reset message input
      }
    },
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
    clearNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.clientId !== action.payload
      );
    },
    receiveNewMessage: (state, action) => {
      const { clientId, message } = action.payload;
      const updatedClients = state.clients.map((client) =>
        client.id === clientId
          ? {
              ...client,
              newMessage: true,
              messages: [...client.messages, message],
            }
          : client
      );
      state.clients = updatedClients;
      state.notifications.push({ clientId, message: message.text });
    },
  },
});

export const {
  setClients,
  setSearchQuery,
  setSelectedClientId,
  setActiveTab,
  setPromotion,
  setMessageInput,
  sendPromotion,
  sendMessage,
  addNotification,
  clearNotification,
  receiveNewMessage,
} = clientEngagementSlice.actions;

export default clientEngagementSlice.reducer;
