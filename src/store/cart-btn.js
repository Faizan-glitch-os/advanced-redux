import { createSlice } from "@reduxjs/toolkit";

const cartBtnSlice = createSlice({
  name: "storeBtn",
  initialState: {
    isCartOpen: false,
  },
  reducers: {
    toggle(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const cartBtnActions = cartBtnSlice.actions;
export default cartBtnSlice;
