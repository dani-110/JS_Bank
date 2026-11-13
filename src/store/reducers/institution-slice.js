import { createSlice } from "@reduxjs/toolkit";
import { getholdinglist, getmerchantposbatchsettlementlist, getmerchantpospayoutdetailen, getmerchantsettlementpending, getmerchantsettlogpos, getmerchantsettlogposSAF } from "../actions/institution";


const initialState = {
  holding: [],
  totalcount: 0,
  merchantposbatchsettlementlist: [],
  merchantposbatchsettlementTotalcount: 0,
  merchantsettlogpos: [],
  merchantsettlogposTotalcount: 0,
  merchantpospayoutdetailen: [],
  merchantpospayoutdetailenTotalcount: 0,
  merchantsettlogposSAF: [],
  merchantsettlogposSAFTotalcount: 0,
  merchantSettlementPending: [],
  merchantSettlementPendingTotalcount: 0
}

const institutionSlice = createSlice({
  name: "holding",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getholdinglist.pending, (state, action) => {
      state.holding = []
    });
    builder.addCase(getholdinglist.fulfilled, (state, action) => {
      state.holding = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(getmerchantposbatchsettlementlist.pending, (state, action) => {
      state.merchantposbatchsettlementlist = []
    });
    builder.addCase(getmerchantposbatchsettlementlist.fulfilled, (state, action) => {
      state.merchantposbatchsettlementlist = action.payload.list
      state.merchantposbatchsettlementTotalcount = action.payload.total
    });
    builder.addCase(getmerchantsettlogpos.pending, (state, action) => {
      state.merchantsettlogpos = []
    });
    builder.addCase(getmerchantsettlogpos.fulfilled, (state, action) => {
      state.merchantsettlogpos = action.payload.list
      state.merchantsettlogposTotalcount = action.payload.total
    });
    builder.addCase(getmerchantpospayoutdetailen.pending, (state, action) => {
      state.merchantpospayoutdetailen = []
    });
    builder.addCase(getmerchantpospayoutdetailen.fulfilled, (state, action) => {
      state.merchantpospayoutdetailen = action.payload.list
      state.merchantpospayoutdetailenTotalcount = action.payload.total
    });
    builder.addCase(getmerchantsettlogposSAF.pending, (state, action) => {
      state.merchantsettlogposSAF = []
    });
    builder.addCase(getmerchantsettlogposSAF.fulfilled, (state, action) => {
      state.merchantsettlogposSAF = action.payload.list
      state.merchantsettlogposSAFTotalcount = action.payload.total
    });
    builder.addCase(getmerchantsettlementpending.pending, (state, action) => {
      state.merchantSettlementPending = []
    });
    builder.addCase(getmerchantsettlementpending.fulfilled, (state, action) => {
      state.merchantSettlementPending = action.payload.list
      state.merchantSettlementPendingTotalcount = action.payload.total
    });
  },
  reducers: {
    updateHoldingRecord: (state, action) => {
      const getIndex = state.holding.findIndex(item => item.id == action.payload.id)
      state.holding[getIndex] = action.payload;
    },
    createHoldingFeeRecord: (state, action) => {
      state.holding.unshift(action.payload)
    },
  },
});
export default institutionSlice.reducer;

export const { updateHoldingRecord,createHoldingFeeRecord } = institutionSlice.actions;