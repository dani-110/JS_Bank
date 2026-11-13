import { createSlice } from "@reduxjs/toolkit";
import { getsettlementlog } from "../actions/settlementLog";
import { getreportslist } from "../actions/reporting";


const initialState = {
  reporting: [],
  totalcount: 0
}

const reportingSlice = createSlice({
  name: "reporting",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getreportslist.pending, (state, action) => {
      state.reporting = []
    });
    builder.addCase(getreportslist.fulfilled, (state, action) => {
      state.reporting = action.payload.list
      state.totalcount = action.payload.total
    });
  },
});
export default reportingSlice.reducer;