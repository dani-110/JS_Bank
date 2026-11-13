import { createSlice } from "@reduxjs/toolkit";
import { getTransactionFeeList } from "../actions/transactioFee";


const initialState = {
  transactionFee: [],
  totalcount: 0
}

const transactionFeeSlice = createSlice({
  name: "transactionFee",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getTransactionFeeList.fulfilled, (state, action) => {
      state.transactionFee = action.payload.list
      state.totalcount = action.payload.total
    });
  },
  reducers: {
    updateTransactionFeeRecord: (state, action) => {
      const getIndex = state.transactionFee.findIndex(item => item.feeid == action.payload.feeid)
      state.transactionFee[getIndex] = action.payload;
    },
    createTransactionFeeRecord: (state, action) => {
      state.transactionFee.unshift(action.payload)
    },
  },
});
export default transactionFeeSlice.reducer;

export const { updateTransactionFeeRecord, createTransactionFeeRecord } = transactionFeeSlice.actions;