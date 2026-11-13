import { createSlice } from "@reduxjs/toolkit";
import { getProductList, getconsumerproductlimits, getconsumerproductlist, getproductbenefits, getproductkyc, productlimit } from "../actions/products";


const initialState = {
  products: [],
  totalcount: 0,
  consumerProductList: [],
  consumerProductTotalcount: 0,
  productLimit: [],
  productKYC: [],
  productBenefits: [],
  consumerLoadLimit: [],
  consumerLoadLimitCount: 0,
  merchantLimit: [],
  merchantLimitCount: 0,
}

const productSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state, action) => {
      state.products = []
    });
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.products = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(getconsumerproductlist.pending, (state, action) => {
      state.consumerProductList = []
    });
    builder.addCase(getconsumerproductlist.fulfilled, (state, action) => {
      state.consumerProductList = action.payload.list
      state.consumerProductTotalcount = action.payload.total
    });
    builder.addCase(getconsumerproductlimits.fulfilled, (state, action) => {
      state.consumerLimit = action.payload.list
      state.consumerLimitCount = action.payload.total
    });
    builder.addCase(productlimit.fulfilled, (state, action) => {
      state.merchantLimit = action.payload.list
      state.merchantLimitCount = action.payload.total
    });
    // builder.addCase(getproductkyc.fulfilled, (state, action) => {
    //   state.productKYC = action.payload
    // });
    // builder.addCase(getproductbenefits.fulfilled, (state, action) => {
    //   state.productBenefits = action.payload
    // });
  },
  reducers: {
    updateProductRecord: (state, action) => {
      const getIndex = state.products.findIndex(item => item.productid == action.payload.productid)
      state.products[getIndex] = action.payload;
    },
    addProductRecord: (state, action) => {
      state.products.unshift(action.payload)
    },
    updateConsumerProductRecord: (state, action) => {
      const getIndex = state.consumerProductList.findIndex(item => item.pid == action.payload.productid)
      state.consumerProductList[getIndex] = action.payload;
    },
    addConsumerProductRecord: (state, action) => {
      state.consumerProductList.unshift(action.payload)
    },
    updateMerchantLimitRecord: (state, action) => {
      const getIndex = state.merchantLimit.findIndex(item => item.id == action.payload.id)
      state.merchantLimit[getIndex] = action.payload;
    },
    addMerchantProductRecord: (state, action) => {
      state.merchantLimit.unshift(action.payload)
    },
    updateConsumerLimitRecord: (state, action) => {
      const getIndex = state.consumerLimit.findIndex(item => item.id == action.payload.id)
      state.consumerLimit[getIndex] = action.payload;
    },
    addConsumerLimitRecord: (state, action) => {
      state.consumerLimit.unshift(action.payload)
    },
  },
});
export default productSlice.reducer;

export const { updateProductRecord, addProductRecord, updateConsumerProductRecord, addConsumerProductRecord, updateMerchantLimitRecord, addMerchantProductRecord,updateConsumerLimitRecord,addConsumerLimitRecord } = productSlice.actions;