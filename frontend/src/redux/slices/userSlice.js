import { createSlice } from "@reduxjs/toolkit";

// CREATE INITIAL STATE
const initialState = {
  user: null,
  loading: false,
  isAuthenticated: false,
  error: null,
  isUpdated: false,
  message: null,
  success: null,
};

const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    // LOGIN / REGISTER / LOAD USER
    loginRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },

    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },

    // LOAD USER FAIL
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },

    // LOGOUT SUCCESS
    logoutSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },

    // LOGOUT FAIL
    logoutFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // UPDATE PROFILE / PASSWORD
    updateRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    updateSuccess: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },

    updateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateReset: (state) => {
      state.isUpdated = false;
    },

    // CLEAR ERRORS
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFail,
  loadUserFail,
  logoutSuccess,
  logoutFail,
  updateRequest,
  updateSuccess,
  updateFail,
  updateReset,
  clearErrors,
} = userSlice.actions;

export default userSlice.reducer;