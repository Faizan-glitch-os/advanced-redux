import { configureStore } from "@reduxjs/toolkit";
import cartBtnSlice from "./cart-btn";
import cartSlice from "./cart";
import notificationSlice from "./notification";

const store = configureStore({
  reducer: {
    cartBtn: cartBtnSlice.reducer,
    cart: cartSlice.reducer,
    notificaton: notificationSlice.reducer,
  },
});

export default store;
