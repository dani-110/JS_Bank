import { createSlice } from "@reduxjs/toolkit";
import { getconsumerdevice } from "../actions/consumer";


const initialState = {
  consumersTaggedDevice: [],
  totalcount: 0
}

const consumersTaggedDeviceSlice = createSlice({
  name: "consumersTaggedDevice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getconsumerdevice.pending, (state, action) => {
      state.consumersTaggedDevice = []
    });
    builder.addCase(getconsumerdevice.fulfilled, (state, action) => {
      state.consumersTaggedDevice = action.payload
      // state.totalcount = action.payload.total
    });
  },
  reducers: {
    updateConsumersTaggedDeviceRecord: (state, action) => {
      const getIndex = state.consumersTaggedDevice.findIndex(item => item.cid == action.payload.cid)
      state.consumersTaggedDevice[getIndex] = action.payload;
    },
  },
});
export default consumersTaggedDeviceSlice.reducer;

export const { updateConsumersTaggedDeviceRecord } = consumersTaggedDeviceSlice.actions;