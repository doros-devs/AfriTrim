// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import analyticsSlice from './analyticsSlice';
import barberReducer from './barberSlice';
import clientEngagementReducer from './clientEngagementSlice';
import manageBarbersReducer from './manageBarbersSlice';
import profileReducer from './profileSlice';
import dashboardReducer from './dashboardSlice';
import landingPageReducer from './landingPageSlice';

export const store = configureStore({
  reducer: {
    analytics: analyticsSlice,
    barbers: barberReducer,
    clientEngagement: clientEngagementReducer,
    manageBarbers: manageBarbersReducer,
    profile: profileReducer,
    dashboard: dashboardReducer,
    landingPage: landingPageReducer,
  },
});
