import { createSlice } from "@reduxjs/toolkit";
import { merchantbranchlist } from "../actions/merchantBranch";


const initialState = {
  merchantBranchList: []
}

const merchantBranchSlice = createSlice({
  name: "merchantBranch",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(merchantbranchlist.pending, (state, action) => {
      state.merchantBranchList = []
    });
    builder.addCase(merchantbranchlist.fulfilled, (state, action) => {
      state.merchantBranchList = action.payload.list
      state.totalcount = action.payload.total
    });
  },
  reducers: {
    updateMerchantBranchRecord: (state, action) => {
      const getIndex = state.merchantBranchList.findIndex(item => item.mbid == action.payload.mbid)
      state.merchantBranchList[getIndex] = action.payload;
    },
    createMerchantBranchFeeRecord: (state, action) => {
      state.merchantBranchList.unshift(action.payload)
    },
  },
});
export default merchantBranchSlice.reducer;

export const { updateMerchantBranchRecord,createMerchantBranchFeeRecord } = merchantBranchSlice.actions;