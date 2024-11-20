import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [
    { id: 1, name: "John Doe", visits: 15, totalSpent: 1200 },
    { id: 2, name: "Jane Smith", visits: 20, totalSpent: 1500 },
    { id: 3, name: "George Brown", visits: 10, totalSpent: 800 },
    { id: 4, name: "Emily White", visits: 25, totalSpent: 2000 },
    { id: 5, name: "Michael Green", visits: 18, totalSpent: 1400 },
  ],
};

const topCustomersSlice = createSlice({
  name: "topCustomers",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.customers.push(action.payload);
    },
    updateCustomer(state, action) {
      const { id, updatedData } = action.payload;
      const customerIndex = state.customers.findIndex(
        (customer) => customer.id === id
      );
      if (customerIndex !== -1) {
        state.customers[customerIndex] = {
          ...state.customers[customerIndex],
          ...updatedData,
        };
      }
    },
    removeCustomer(state, action) {
      const customerId = action.payload;
      state.customers = state.customers.filter(
        (customer) => customer.id !== customerId
      );
    },
  },
});

export const { addCustomer, updateCustomer, removeCustomer } =
  topCustomersSlice.actions;

export default topCustomersSlice.reducer;
