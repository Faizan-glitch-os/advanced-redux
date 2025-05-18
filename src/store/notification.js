import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        description: action.payload.description,
      };
    },
  },
});

export const notificationAction = notificationSlice.actions;

export default notificationSlice;
