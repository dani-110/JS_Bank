import { createSlice } from "@reduxjs/toolkit";
import { getpoolacctlist, getpoolacctlog } from "../actions/finance";


const initialState = {
  poolAccountList: [],
  poolAccountTotalcount: 0,
  poolAccountLogList: [],
  poolAccountLogTotalcount: 0
}

const financeSlice = createSlice({
  name: "finance",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getpoolacctlist.pending, (state, action) => {
      state.poolAccountList = []
    });
    builder.addCase(getpoolacctlist.fulfilled, (state, action) => {
      state.poolAccountList = action.payload.list
      state.poolAccountTotalcount = action.payload.total
    });
    builder.addCase(getpoolacctlog.pending, (state, action) => {
      state.poolAccountLogList = []
    });
    builder.addCase(getpoolacctlog.fulfilled, (state, action) => {
      state.poolAccountLogList = action.payload.list
      state.poolAccountLogTotalcount = action.payload.total
    });
  }
});
export default financeSlice.reducer;
