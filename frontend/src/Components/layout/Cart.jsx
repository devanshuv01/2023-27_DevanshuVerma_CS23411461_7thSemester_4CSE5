import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCartItems,
  updateCartQuantity,
  removeItemFromCart,
} from "../../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems, loading, error } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const increaseQuantity = (foodItemId, quantity) => {
    dispatch(updateCartQuantity(foodItemId, quantity + 1));
  };

  const decreaseQuantity = (foodItemId, quantity) => {
    if (quantity > 1) {
      dispatch(updateCartQuantity(foodItemId, quantity - 1));
    }
  };

  const removeItem = (foodItemId) => {
    dispatch(removeItemFromCart(foodItemId));
  };

  if (loading) {
    return <h2>Loading Cart...</h2>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.foodItem?._id || item._id}
            className="card mb-3 p-3"
          >
            <h4>{item.foodItem?.name || "Food Item"}</h4>

            <p>
              Price: ₹
              {item.foodItem?.price || item.price || 0}
            </p>

            <p>Quantity: {item.quantity}</p>

            <button
              className="btn btn-success mr-2"
              onClick={() =>
                increaseQuantity(
                  item.foodItem?._id || item.foodItem,
                  item.quantity
                )
              }
            >
              +
            </button>

            <button
              className="btn btn-warning mr-2"
              onClick={() =>
                decreaseQuantity(
                  item.foodItem?._id || item.foodItem,
                  item.quantity
                )
              }
            >
              -
            </button>

            <button
              className="btn btn-danger"
              onClick={() =>
                removeItem(
                  item.foodItem?._id || item.foodItem
                )
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;