// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import clientDashboardReducer from "./clientSlices/clientDashboardSlice";
import bookingReducer from "./clientSlices/bookingSlice";
import chatReducer from "./clientSlices/chatSlice";
import paymentReducer from "./clientSlices/paymentSlice";
import reviewReducer from "./clientSlices/reviewSlice";
import searchReducer from "./clientSlices/searchSlice";
import serviceReducer from "./clientSlices/serviceSlice";

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    chat: chatReducer,
    payment: paymentReducer,
    clientDashboard: clientDashboardReducer,
    review: reviewReducer,
    search: searchReducer,
    service: serviceReducer,
  },
});
