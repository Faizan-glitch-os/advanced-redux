import { configureStore } from "@reduxjs/toolkit";
import cartBtnSlice from "./cart-btn";
import cartSlice from "./cart";

const store = configureStore({
  reducer: { cartBtn: cartBtnSlice.reducer, cart: cartSlice.reducer },
});

export default store;
