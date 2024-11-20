// // src/store/index.js
// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     // Add your reducers here
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import barbersPerformanceReducer from "./barbersPerformanceSlice";
import barChartReducer from './barChartSlice'
import keyMetricsReducer from "./keyMetricsSlice";
import lineChartReducer from "./lineChartSlice";
import performanceReportsReducer from "./performanceReportsSlice";
import pieChartReducer from "./pieChartSlice";
import reportReducer from "./reportSlice";
import salesOverviewReducer from "./salesOverviewSlice";
import sidebarReducer from "./sidebarSlice";
import statsReducer from "./statsSlice";
import topCustomersReducer from "./topCustomersSlice";
import userAnalyticsReducer from "./userAnalyticsSlice";

const store = configureStore({
  reducer: {
    barbersPerformance: barbersPerformanceReducer,
    barChart: barChartReducer, keyMetrics: keyMetricsReducer,
    lineChart: lineChartReducer,performanceReports: performanceReportsReducer,
    pieChart: pieChartReducer,report: reportReducer,
    salesOverview: salesOverviewReducer,sidebar: sidebarReducer,
    stats: statsReducer,topCustomers: topCustomersReducer,
    userAnalytics: userAnalyticsReducer,


  },
});

export default store;
