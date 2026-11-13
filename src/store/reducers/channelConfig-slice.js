import { createSlice } from "@reduxjs/toolkit";
import { getchannellist, getswitchchannellist, networkmanagementgetchannellist } from "../actions/channelConfig";


const initialState = {
  channel: [],
  channelTotalcount: 0,
  networkmanagementchannel: [],
  networkmanagementchannelTotalcount: 0,
  switchChannel: [],
  switchChannelTotalcount: 0
}

const channelConfigSlice = createSlice({
  name: "channelConfig",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getchannellist.pending, (state, action) => {
      state.channel = []
    });
    builder.addCase(getchannellist.fulfilled, (state, action) => {
      state.channel = action.payload.list
      state.channelTotalcount = action.payload.total
    });
    builder.addCase(networkmanagementgetchannellist.pending, (state, action) => {
      state.networkmanagementchannel = []
    });
    builder.addCase(networkmanagementgetchannellist.fulfilled, (state, action) => {
      state.networkmanagementchannel = action.payload.list
      state.networkmanagementchannelTotalcount = action.payload.total
    });
    builder.addCase(getswitchchannellist.pending, (state, action) => {
      state.switchChannel = []
    });
    builder.addCase(getswitchchannellist.fulfilled, (state, action) => {
      state.switchChannel = action.payload.list
      state.switchChannelTotalcount = action.payload.total
    });
  }
});
export default channelConfigSlice.reducer;
