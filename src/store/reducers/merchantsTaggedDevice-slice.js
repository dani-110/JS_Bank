import { createSlice } from "@reduxjs/toolkit";
import { getmerchantdevice } from "../actions/merchants";


const initialState = {
  merchantsTaggedDevice: [],
  totalcount: 0
}

const merchantsTaggedDeviceSlice = createSlice({
  name: "merchantsTaggedDevice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getmerchantdevice.pending, (state, action) => {
      state.merchantsTaggedDevice = []
    });
    builder.addCase(getmerchantdevice.fulfilled, (state, action) => {
      state.merchantsTaggedDevice = action.payload
      // state.totalcount = action.payload.total
    });
  },
  reducers: {
    updatemerchantsTaggedDeviceRecord: (state, action) => {
      const getIndex = state.merchantsTaggedDevice.findIndex(item => item.cid == action.payload.cid)
      state.merchantsTaggedDevice[getIndex] = action.payload;
    },
  },
});
export default merchantsTaggedDeviceSlice.reducer;

export const { updatemerchantsTaggedDeviceRecord } = merchantsTaggedDeviceSlice.actions;