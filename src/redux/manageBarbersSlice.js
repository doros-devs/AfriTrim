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
    setIsActive: (state, action) => {
      state.isActive = action.payload;
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
      const newBarber = { ...state.barberDetails };
      state.barbers.push(newBarber);
      // We don't update successMessage directly in the reducer
      // It's handled in the component with dispatch
    },
    updateBarber: (state) => {
      const updatedBarbers = state.barbers.map((barber, index) =>
        index === state.isEditMode ? { ...state.barberDetails } : barber
      );
      state.barbers = updatedBarbers;
      // We don't update successMessage directly in the reducer
      // It's handled in the component with dispatch
    },
    deleteBarber: (state) => {
      const updatedBarbers = state.barbers.filter(
        (_, i) => i !== state.deleteIndex
      );
      state.barbers = updatedBarbers;
      state.showDeleteDialog = false;
    },
    searchBarbers: (state) => {
      return state.barbers.filter((barber) =>
        barber.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
});

export const {
  setBarbers,
  setBarberDetails,
  setIsAddFormVisible,
  setIsViewFormVisible,
  setIsActive,
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
