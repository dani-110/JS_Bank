import { createSlice } from "@reduxjs/toolkit";
import { getbankslist, getbillerslist, getrulelist } from "../actions/paynest";


const initialState = {
  bankList: [],
  bankListTotalcount: 0,
  billerList: [],
  billerListTotalcount: 0,
  blockingList: [],
  blockingListTotalcount: 0,
}

const paynestSlice = createSlice({
  name: "paynest",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getbankslist.pending, (state, action) => {
      state.bankList = []
    });
    builder.addCase(getbankslist.fulfilled, (state, action) => {
      state.bankList = action.payload.list
      state.bankListTotalcount = action.payload.total
    });
    builder.addCase(getbillerslist.pending, (state, action) => {
      state.billerList = []
    });
    builder.addCase(getbillerslist.fulfilled, (state, action) => {
      state.billerList = action.payload.list
      state.billerListTotalcount = action.payload.total
    });
    builder.addCase(getrulelist.pending, (state, action) => {
      state.blockingList = []
    });
    builder.addCase(getrulelist.fulfilled, (state, action) => {
      state.blockingList = action.payload.list
      state.blockingListTotalcount = action.payload.total
    });
  },
  reducers: {
    updateBankRecord: (state, action) => {
      const getIndex = state.bankList.findIndex(item => item.id == action.payload.id)
      state.bankList[getIndex] = action.payload;
    },
    createBankRecord: (state, action) => {
      state.bankList.unshift(action.payload)
    },
    updateBillerRecord: (state, action) => {
      const getIndex = state.billerList.findIndex(item => item.bid == action.payload.bid)
      state.billerList[getIndex] = action.payload;
    },
    createBillerRecord: (state, action) => {
      state.billerList.unshift(action.payload)
    },
  },
});
export default paynestSlice.reducer;

export const { updateBankRecord, createBankRecord, updateBillerRecord, createBillerRecord } = paynestSlice.actions;
