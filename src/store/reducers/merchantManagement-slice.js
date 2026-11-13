import { createSlice } from "@reduxjs/toolkit";
import { getmerchantfinancialinfo, getmerchantmanagementlist, getmerchantmember, merchantmangementlist, merchantpospayoutdetail } from "../actions/merchantManagement";


const initialState = {
  merchantmangementList: [],
  totalcount: 0,
  merchantmangementMerchantList: [],
  merchantmangementMerchanttotalcount: 0,
  merchantmemberList: [],
  merchantfinancialinfoList: [],
  merchantpospayoutdetail: [],
  merchantpospayoutdetailtotalcount: 0,
}

const merchantManagementSlice = createSlice({
  name: "merchantManagement",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(merchantmangementlist.pending, (state, action) => {
      state.merchantmangementList = []
    });
    builder.addCase(merchantmangementlist.fulfilled, (state, action) => {
      state.merchantmangementList = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(getmerchantmanagementlist.pending, (state, action) => {
      state.merchantmangementMerchantList = []
    });
    builder.addCase(getmerchantmanagementlist.fulfilled, (state, action) => {
      state.merchantmangementMerchantList = action.payload.list
      state.merchantmangementMerchanttotalcount = action.payload.total
    });
    builder.addCase(getmerchantmember.pending, (state, action) => {
      state.merchantmemberList = []
    });
    builder.addCase(getmerchantmember.fulfilled, (state, action) => {
      state.merchantmemberList = action.payload
    });
    builder.addCase(getmerchantfinancialinfo.pending, (state, action) => {
      state.merchantfinancialinfoList = []
    });
    builder.addCase(getmerchantfinancialinfo.fulfilled, (state, action) => {
      state.merchantfinancialinfoList = action.payload
    });
    builder.addCase(merchantpospayoutdetail.pending, (state, action) => {
      state.merchantpospayoutdetail = []
    });
    builder.addCase(merchantpospayoutdetail.fulfilled, (state, action) => {
      state.merchantpospayoutdetail = action.payload.list
      state.merchantpospayoutdetailtotalcount = action.payload.total
    });
  },
  reducers: {
    updateMerchantManagementRecord: (state, action) => {
      const getIndex = state.merchantmangementList.findIndex(item => item.mid == action.payload.mid)
      state.merchantmangementList[getIndex] = action.payload;
    },
    createMerchantManagementFeeRecord: (state, action) => {
      state.merchantmangementList.unshift(action.payload)
    },
    updateMerchantmember: (state, action) => {
      const getIndex = state.merchantmemberList.findIndex(item => item.memid == action.payload.memid)
      state.merchantmemberList[getIndex] = action.payload;
    },
    createMerchantmember: (state, action) => {
      state.merchantmemberList.unshift(action.payload)
    },
    updateMerchantfinancialinfo: (state, action) => {
      const getIndex = state.merchantfinancialinfoList.findIndex(item => item.fid == action.payload.fid)
      state.merchantfinancialinfoList[getIndex] = action.payload;
    },
    createMerchantfinancialinfo: (state, action) => {
      state.merchantfinancialinfoList.unshift(action.payload)
    },
    merchantmangementMerchantResetCount: (state, action) => {
      state.merchantmangementMerchanttotalcount = 0
    }
  },
});
export default merchantManagementSlice.reducer;

export const { updateMerchantManagementRecord, createMerchantManagementFeeRecord, updateMerchantmember, createMerchantmember, updateMerchantfinancialinfo, createMerchantfinancialinfo, merchantmangementMerchantResetCount } = merchantManagementSlice.actions;