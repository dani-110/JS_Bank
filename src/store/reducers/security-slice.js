import { createSlice } from "@reduxjs/toolkit";
import { getuserauditlog } from "../actions/security";


const initialState = {
  audit: [],
  auditTotalcount: 0
}

const securitySlice = createSlice({
  name: "security",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getuserauditlog.pending, (state, action) => {
      state.audit = []
    });
    builder.addCase(getuserauditlog.fulfilled, (state, action) => {
      state.audit = action.payload.list
      state.auditTotalcount = action.payload.total
    });
  }
});
export default securitySlice.reducer;
