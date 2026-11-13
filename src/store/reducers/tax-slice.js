import { createSlice } from "@reduxjs/toolkit";
import { getTaxList } from "../actions/tax";


const initialState = {
  tax: [],
  totalcount: 0
}

const taxSlice = createSlice({
  name: "tax",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getTaxList.pending, (state, action) => {
      state.tax = []
    });
    builder.addCase(getTaxList.fulfilled, (state, action) => {
      state.tax = action.payload.list
      state.totalcount = action.payload.total
    });
  },
  reducers: {
    updateTaxRecord: (state, action) => {
      const getIndex = state.tax.findIndex(item => item.taxid == action.payload.taxid)
      state.tax[getIndex] = action.payload;
    },
    createTaxRecord: (state, action) => {
      state.tax.unshift(action.payload)
    },
  },
});
export default taxSlice.reducer;

export const { updateTaxRecord, createTaxRecord } = taxSlice.actions;