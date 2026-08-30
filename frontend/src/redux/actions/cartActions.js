// Fetch cart
// Add items
// Update quantity
// Remove items
// Handle loading and errors

import api from "../../utils/api";

import {
  cartRequest,
  cartSuccess,
  cartFail,
  updateCartSuccess,
  removeCartSuccess,
} from "../slices/cartSlice";

// FETCH CART ITEMS
export const fetchCartItems = () => async (dispatch) => {
  try {
    dispatch(cartRequest());

    const { data } = await api.get(
      "/v1/eats/cart/get-cart"
    );

    console.log("CART API:", data.data);

    dispatch(cartSuccess(data.data));
  } catch (error) {
    dispatch(
      cartFail(
        error.response?.data?.message || error.message
      )
    );
  }
};

// ADD ITEM TO CART
export const addItemToCart =
  (foodItemId, restaurantId, quantity) =>
  async (dispatch, getState) => {
    try {
      dispatch(cartRequest());

      const { user } = getState().user;

      const { data } = await api.post(
        "/v1/eats/cart/add-to-cart",
        {
          userId: user._id,
          foodItemId,
          restaurantId,
          quantity,
        }
      );

      dispatch(cartSuccess(data.cart));
    } catch (error) {
      dispatch(
        cartFail(
          error.response?.data?.message || error.message
        )
      );
    }
  };

// UPDATE CART QUANTITY
export const updateCartQuantity =
  (foodItemId, quantity) =>
  async (dispatch, getState) => {
    try {
      dispatch(cartRequest());

      const { user } = getState().user;

      const { data } = await api.post(
        "/v1/eats/cart/update-cart-item",
        {
          userId: user._id,
          foodItemId,
          quantity,
        }
      );

      dispatch(updateCartSuccess(data.cart));
    } catch (error) {
      dispatch(
        cartFail(
          error.response?.data?.message || error.message
        )
      );
    }
  };

// REMOVE ITEM FROM CART
export const removeItemFromCart =
  (foodItemId) =>
  async (dispatch, getState) => {
    try {
      dispatch(cartRequest());

      const { user } = getState().user;

      const { data } = await api.delete(
        "/v1/eats/cart/delete-cart-item",
        {
          data: {
            userId: user._id,
            foodItemId,
          },
        }
      );

      dispatch(removeCartSuccess(data));
    } catch (error) {
      dispatch(
        cartFail(
          error.response?.data?.message || error.message
        )
      );
    }
  };