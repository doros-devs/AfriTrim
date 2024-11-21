// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import analyticsSlice from './analyticsSlice';
import barberReducer from './barberSlice';
import clientEngagementReducer from './clientEngagementSlice';
import manageBarbersReducer from './manageBarbersSlice';
import profileReducer from './profileSlice';
import dashboardReducer from './dashboardSlice';
import landingPageReducer from './landingPageSlice';
import clientDashboardReducer from "./clientSlices/clientDashboardSlice";
import bookingReducer from "./clientSlices/bookingSlice";
import chatReducer from "./clientSlices/chatSlice";
import paymentReducer from "./clientSlices/paymentSlice";
import reviewReducer from "./clientSlices/reviewSlice";
import searchReducer from "./clientSlices/searchSlice";
import serviceReducer from "./clientSlices/serviceSlice";

export const store = configureStore({
  reducer: {
    analytics: analyticsSlice,
    barbers: barberReducer,
    clientEngagement: clientEngagementReducer,
    manageBarbers: manageBarbersReducer,
    profile: profileReducer,
    dashboard: dashboardReducer,
    landingPage: landingPageReducer,
    booking: bookingReducer,
    chat: chatReducer,
    payment: paymentReducer,
    clientDashboard: clientDashboardReducer,
    review: reviewReducer,
    search: searchReducer,
    service: serviceReducer,
  },
});
