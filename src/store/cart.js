import { createSlice } from "@reduxjs/toolkit";

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

export const cartActions = cartSlice.actions;

export default cartSlice;
