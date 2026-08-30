import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATE
const initialState = {
  cartItems: [],
  restaurant: {},
  deliveryInfo: {},
  loading: false,
  error: null,
};


const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // CART REQUEST
    cartRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    // CART SUCCESS
    cartSuccess: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload?.items || [];
      state.restaurant = action.payload?.restaurant || {};
      state.error = null;
    },

    // CART FAIL
    cartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // UPDATE CART
    updateCartSuccess: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload?.items || [];
    },

    // REMOVE ITEM FROM CART
    removeCartSuccess: (state, action) => {
      state.loading = false;
      state.cartItems = action.payload?.cart?.items || [];
    },

    // CLEAR CART
    clearCart: (state) => {
      state.cartItems = [];
      state.restaurant = {};
    },

    // CLEAR ERRORS
    clearErrors: (state) => {
      state.error = null;
    },

    // SAVE DELIVERY INFO
    saveDeliveryInfo: (state, action) => {
      state.deliveryInfo = action.payload;
    },
  },
});

export const {
  cartRequest,
  cartSuccess,
  cartFail,
  updateCartSuccess,
  removeCartSuccess,
  clearCart,
  clearErrors,
  saveDeliveryInfo,
} = cartSlice.actions;

export default cartSlice.reducer;