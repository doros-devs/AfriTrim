import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  barbers: [],
  barberDetails: {
    name: "",
    roles: "",
    age: "",
    startDate: "",
    experience: "",
    gender: "",
    phoneNumber: "",
    profilePicture: "",
  },
  isAddFormVisible: false,
  isViewFormVisible: false,
  isActive: false,
  successMessage: "",
  showButtons: true,
  isEditMode: false,
  searchQuery: "",
  showDeleteDialog: false,
  deleteIndex: null,
};

const manageBarbersSlice = createSlice({
  name: "manageBarbers",
  initialState,
  reducers: {
    setBarbers: (state, action) => {
      state.barbers = action.payload;
    },
    setBarberDetails: (state, action) => {
      state.barberDetails = action.payload;
    },
    setIsAddFormVisible: (state, action) => {
      state.isAddFormVisible = action.payload;
    },
    setIsViewFormVisible: (state, action) => {
      state.isViewFormVisible = action.payload;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    setShowButtons: (state, action) => {
      state.showButtons = action.payload;
    },
    setIsEditMode: (state, action) => {
      state.isEditMode = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setShowDeleteDialog: (state, action) => {
      state.showDeleteDialog = action.payload;
    },
    setDeleteIndex: (state, action) => {
      state.deleteIndex = action.payload;
    },
    addBarber: (state) => {
      state.barbers.push(state.barberDetails);
      state.barberDetails = initialState.barberDetails;
    },
    updateBarber: (state) => {
      const index = state.isEditMode;
      if (index !== false) {
        state.barbers[index] = state.barberDetails;
      }
      state.barberDetails = initialState.barberDetails;
    },
    deleteBarber: (state) => {
      const index = state.deleteIndex;
      if (index !== null) {
        state.barbers.splice(index, 1);
      }
    },
  },
});

export const {
  setBarbers,
  setBarberDetails,
  setIsAddFormVisible,
  setIsViewFormVisible,
  setSuccessMessage,
  setShowButtons,
  setIsEditMode,
  setSearchQuery,
  setShowDeleteDialog,
  setDeleteIndex,
  addBarber,
  updateBarber,
  deleteBarber,
} = manageBarbersSlice.actions;

export default manageBarbersSlice.reducer;
