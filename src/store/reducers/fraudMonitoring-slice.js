import { createSlice } from "@reduxjs/toolkit";
import { getconsumertransactionslist, getgeofencinglist, getipblockinglist, getmerchanttransactionslist } from "../actions/fraudMonitoring";


const initialState = {
  consumerTransaction: [],
  consumerTransactionTotalcount: 0,
  merchantTransaction: [],
  merchantTransactionTotalcount: 0,
  getipblocking: [],
  getipblockingTotalcount: 0,
  geoFencingBlocking: [],
  geoFencingBlockingTotalcount: 0
}

const fraudMonitoringSlice = createSlice({
  name: "fraudMonitoring",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getconsumertransactionslist.pending, (state, action) => {
      state.consumerTransaction = []
    });
    builder.addCase(getconsumertransactionslist.fulfilled, (state, action) => {
      state.consumerTransaction = action.payload.list
      state.consumerTransactionTotalcount = action.payload.total
    });
    builder.addCase(getmerchanttransactionslist.pending, (state, action) => {
      state.merchantTransaction = []
    });
    builder.addCase(getmerchanttransactionslist.fulfilled, (state, action) => {
      state.merchantTransaction = action.payload.list
      state.merchantTransactionTotalcount = action.payload.total
    });
    builder.addCase(getipblockinglist.pending, (state, action) => {
      state.getipblocking = []
    });
    builder.addCase(getipblockinglist.fulfilled, (state, action) => {
      state.getipblocking = action.payload.list
      state.getipblockingTotalcount = action.payload.total
    });
    builder.addCase(getgeofencinglist.pending, (state, action) => {
      state.geoFencingBlocking = []
    });
    builder.addCase(getgeofencinglist.fulfilled, (state, action) => {
      state.geoFencingBlocking = action.payload.list
      state.geoFencingBlockingTotalcount = action.payload.total
    });
  },
  reducers: {
    createIPBlocking: (state, action) => {
      state.getipblocking.unshift(action.payload)
    },
    updateIPBlocking: (state, action) => {
      const getIndex = state.getipblocking.findIndex(item => item.ipbid == action.payload.ipbid)
      state.getipblocking[getIndex] = action.payload;
    },
    createGeoFancing: (state, action) => {
      state.geoFencingBlocking.unshift(action.payload)
    },
    updateGeoFancing: (state, action) => {
      const getIndex = state.geoFencingBlocking.findIndex(item => item.gfid == action.payload.gfid)
      state.geoFencingBlocking[getIndex] = action.payload;
    },
  }
});
export default fraudMonitoringSlice.reducer;


export const { createIPBlocking, updateIPBlocking, createGeoFancing, updateGeoFancing } = fraudMonitoringSlice.actions;