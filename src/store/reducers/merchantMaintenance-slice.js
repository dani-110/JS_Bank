import { createSlice } from "@reduxjs/toolkit";
import { getcheckerlisting, getmakerlisting, getmerchantupgradeAuthorizerrequestlist, getmerchantupgraderequestlist } from "../actions/merchantMaintenance";


const initialState = {
  makerList: [],
  makerListTotalcount: 0,
  checkerList: [],
  checkerListTotalcount: 0,
  merchantupgraderequestList: [],
  merchantupgraderequestListTotalcount: 0,
  merchantupgradeAuthorizerrequestList: [],
  merchantupgradeAuthorizerrequestListTotalcount: 0,
}

const merchantMaintenanceSlice = createSlice({
  name: "merchantMaintenance",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getmakerlisting.pending, (state, action) => {
      state.makerList = []
    });
    builder.addCase(getmakerlisting.fulfilled, (state, action) => {
      state.makerList = action.payload.list
      state.makerListTotalcount = action.payload.total
    });
    builder.addCase(getcheckerlisting.pending, (state, action) => {
      state.checkerList = []
    });
    builder.addCase(getcheckerlisting.fulfilled, (state, action) => {
      state.checkerList = action.payload.list
      state.checkerListTotalcount = action.payload.total
    });
    builder.addCase(getmerchantupgraderequestlist.pending, (state, action) => {
      state.merchantupgraderequestList = []
    });
    builder.addCase(getmerchantupgraderequestlist.fulfilled, (state, action) => {
      state.merchantupgraderequestList = action.payload.list
      state.merchantupgraderequestListTotalcount = action.payload.total
    });
    builder.addCase(getmerchantupgradeAuthorizerrequestlist.pending, (state, action) => {
      state.merchantupgradeAuthorizerrequestList = []
    });
    builder.addCase(getmerchantupgradeAuthorizerrequestlist.fulfilled, (state, action) => {
      state.merchantupgradeAuthorizerrequestList = action.payload.list
      state.merchantupgradeAuthorizerrequestListTotalcount = action.payload.total
    });
  },
  reducers: {
    updatemerchantSearchMaintenanceChecker: (state, action) => {
      state.merchantSearchMaintenanceChecker = action.payload
    },
    updatemerchantSearchMaintenanceMaker: (state, action) => {
      state.merchantSearchMaintenanceMaker = action.payload
    },
  },
});
export default merchantMaintenanceSlice.reducer;


export const { updateMerchantsRecord, updatemerchantSearchMaintenanceMaker, updatemerchantSearchMaintenanceChecker } = merchantMaintenanceSlice.actions;