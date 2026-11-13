import { createSlice } from "@reduxjs/toolkit";
import { getsettlementlog, gettalist } from "../actions/settlementLog";


const initialState = {
  settlementLog: [],
  totalcount: 0,
  trustAccount: [],
  trustAccountTotalcount: 0
}

const settlementLogSlice = createSlice({
  name: "settlementLog",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getsettlementlog.pending, (state, action) => {
      state.settlementLog = []
    });
    builder.addCase(getsettlementlog.fulfilled, (state, action) => {
      state.settlementLog = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(gettalist.pending, (state, action) => {
      state.trustAccount = []
    });
    builder.addCase(gettalist.fulfilled, (state, action) => {
      state.trustAccount = action.payload.list
      state.trustAccountTotalcount = action.payload.total
    });
  },
  reducers: {
    updateTrustAccount: (state, action) => {
      const getIndex = state.trustAccount.findIndex(item => item.taid == action.payload.taid)
      state.trustAccount[getIndex] = action.payload;
    },
  },
});

export default settlementLogSlice.reducer;

export const { updateTrustAccount } = settlementLogSlice.actions;