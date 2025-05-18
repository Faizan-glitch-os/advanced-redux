import { createSlice } from "@reduxjs/toolkit";

import { notificationActions } from "./notification";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItem(state, action) {
      const receivedItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === receivedItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: receivedItem.id,
          name: receivedItem.name,
          price: receivedItem.price,
          quantity: 1,
          totalPrice: receivedItem.price,
          description: receivedItem.description,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + receivedItem.price;
      }
    },
    removeItem(state, action) {
      const receivedId = action.payload;

      const existingItem = state.items.find((item) => item.id === receivedId);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== receivedId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: "pending",
        title: "Sending Cart Data",
        description: "Currently sending cart data",
      })
    );

    const sendData = async (cart) => {
      const response = await fetch(
        "https://react-advanced-redux-c009f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        dispatch(
          notificationActions.showNotification({
            status: "error",
            title: "Failed",
            description: "Failed sending cart data",
          })
        );
      }

      dispatch(
        notificationActions.showNotification({
          status: "success",
          title: "Success sending cart",
          description: "Sent cart data successfuly",
        })
      );
    };

    try {
      await sendData(cart);
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          title: "Failed",
          description: "Something went wrong",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
