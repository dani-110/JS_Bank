import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null, isLoading: false, responseNotification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    showResponseNotification(state, action) {
      state.responseNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
        showCancel: action.payload.showCancel || false,
        cancelText: action.payload.cancelText || "Cancel",
        proceedText: action.payload.proceedText || "OK",
        onProceed: action.payload.onProceed || null,
        onCancel: action.payload.onCancel || null,
      };
    },
    hideNotification(state) {
      state.notification = null;
    },
    hideResponseNotification(state) {
      state.responseNotification = null;
    },
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
