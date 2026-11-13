import { createSlice } from "@reduxjs/toolkit";
import { getmerchantCheckerlist, getmerchantlist, getmerchantwallets } from "../actions/merchants";


const initialState = {
  merchants: [],
  totalcount: 0,
  merchantsChecker: [],
  totalcountChecker: 0,
  merchantSearchMaintenanceMaker: {},
  merchantSearchMaintenanceChecker: {},
}

const merchantsSlice = createSlice({
  name: "merchants",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getmerchantlist.pending, (state, action) => {
      state.merchants = []
    });
    builder.addCase(getmerchantlist.fulfilled, (state, action) => {
      state.merchants = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(getmerchantCheckerlist.pending, (state, action) => {
      state.merchantsChecker = []
    });
    builder.addCase(getmerchantCheckerlist.fulfilled, (state, action) => {
      state.merchantsChecker = action.payload.list
      state.totalcountChecker = action.payload.total
    });
  },
  reducers: {
    updateMerchantsRecord: (state, action) => {
      const getIndex = state.merchants.findIndex(item => item.mid == action.payload.mid)
      state.merchants[getIndex] = action.payload;
    },

    updatemerchantSearchMaintenanceMaker: (state, action) => {
      state.merchantSearchMaintenanceMaker = action.payload
    },
    updatemerchantSearchMaintenanceChecker: (state, action) => {
      state.merchantSearchMaintenanceChecker = action.payload
    },
  },
});
export default merchantsSlice.reducer;

export const { updateMerchantsRecord, updatemerchantSearchMaintenanceMaker, updatemerchantSearchMaintenanceChecker } = merchantsSlice.actions;