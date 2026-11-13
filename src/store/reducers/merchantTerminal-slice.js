import { createSlice } from "@reduxjs/toolkit";
import { getmerchantterminallist } from "../actions/merchantTerminal";


const initialState = {
  merchantTerminalList: [],
  totalcount: 0
}

const merchantTerminalSlice = createSlice({
  name: "merchantTerminal",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getmerchantterminallist.fulfilled, (state, action) => {
      state.merchantTerminalList = action.payload.list
      state.totalcount = action.payload.total
    });
  },
  reducers: {
    updateMerchantTerminalRecord: (state, action) => {
      const getIndex = state.merchantTerminalList.findIndex(item => item.mtid == action.payload.mtid)
      state.merchantTerminalList[getIndex] = action.payload;
    },
    createMerchantTerminalFeeRecord: (state, action) => {
      state.merchantTerminalList.unshift(action.payload)
    },
  },
});
export default merchantTerminalSlice.reducer;

export const { updateMerchantTerminalRecord,createMerchantTerminalFeeRecord } = merchantTerminalSlice.actions;