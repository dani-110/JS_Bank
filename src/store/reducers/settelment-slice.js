import { createSlice } from "@reduxjs/toolkit";
import { getgetraastimporthistory, getgettimporthistory, taxDataImport } from "../actions/settelment";


const initialState = {
  settelmentHistory: [],
  totalcount: 0,
  taxDataImportList: [],
  taxDataImportTotalcount: 0,
  raastDetail: [],
  raastDetailTotalcount: 0,
}

const settelmentSlice = createSlice({
  name: "settelment",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getgettimporthistory.pending, (state, action) => {
      state.settelmentHistory = []
    });
    builder.addCase(getgettimporthistory.fulfilled, (state, action) => {
      state.settelmentHistory = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(getgetraastimporthistory.pending, (state, action) => {
      state.raastDetail = []
    });
    builder.addCase(getgetraastimporthistory.fulfilled, (state, action) => {
      state.raastDetail = action.payload.list
      state.raastDetailTotalcount = action.payload.total
    });
    builder.addCase(taxDataImport.pending, (state, action) => {
      state.taxDataImportList = []
    });
    builder.addCase(taxDataImport.fulfilled, (state, action) => {
      state.taxDataImportList = action.payload.list
      state.taxDataImportTotalcount = action.payload.total
    });
  },
  reducers: {
    updatesettelmentRecord: (state, action) => {
      const getIndex = state.settelmentHistory.findIndex(item => item.settelmentid == action.payload.settelmentid)
      state.settelmentHistory[getIndex] = action.payload;
    },
    createsettelmentRecord: (state, action) => {
      state.settelmentHistory.unshift(action.payload)
    },
  },
});
export default settelmentSlice.reducer;

export const { updatesettelmentRecord, createsettelmentRecord } = settelmentSlice.actions;