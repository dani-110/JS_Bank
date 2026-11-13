import { createSlice } from "@reduxjs/toolkit";
import { getbroadcastnotificationconfiglist, getnotificationconfiglist } from "../actions/notification";


const initialState = {
  transactionSearchData: {},
  transactionNotification: [],
  transactionNotificationcount: 0,
  broadcastSearchData: {},
  broadcastNotification: [],
  broadcastNotificationcount: 0,
}

const notificationSlice = createSlice({
  name: "notification",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getnotificationconfiglist.pending, (state, action) => {
      state.transactionNotification = []
    });
    builder.addCase(getnotificationconfiglist.fulfilled, (state, action) => {
      state.transactionNotification = action.payload.list
      state.transactionNotificationcount = action.payload.total
    });
    builder.addCase(getbroadcastnotificationconfiglist.pending, (state, action) => {
      state.broadcastNotification = []
    });
    builder.addCase(getbroadcastnotificationconfiglist.fulfilled, (state, action) => {
      state.broadcastNotification = action.payload.list
      state.broadcastNotificationcount = action.payload.total
    });
  },
  reducers: {
    setNotificationSearchData: (state, action) => {
      state.transactionSearchData = action.payload;
    },
    updateTransactionNotificationRecord: (state, action) => {
      const getIndex = state.transactionNotification.findIndex(item => item.notifytype == action.payload.notifytype)
      state.transactionNotification[getIndex] = action.payload;
    },
    createTransactionNotificationRecord: (state, action) => {
      console.log(action, state.transactionNotification)
      state.transactionNotification.unshift(action.payload)
    },
    setBroadcastSearchData: (state, action) => {
      state.broadcastSearchData = action.payload;
    },
    updatebroadcastNotificationRecord: (state, action) => {
      const getIndex = state.broadcastNotification.findIndex(item => item.notifytype == action.payload.notifytype)
      state.broadcastNotification[getIndex] = action.payload;
    },
    createbroadcastNotificationRecord: (state, action) => {
      state.broadcastNotification.unshift(action.payload)
    },
  },
});
export default notificationSlice.reducer;

export const { setNotificationSearchData, updateTransactionNotificationRecord, createTransactionNotificationRecord, setBroadcastSearchData, updatebroadcastNotificationRecord, createbroadcastNotificationRecord } = notificationSlice.actions;