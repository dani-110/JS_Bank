import { createSlice } from "@reduxjs/toolkit";
import { getbillinquirylist, getbiometricvalidationlist, getdocumentocrlist, getdocumentvalidationlist, getholdinglistresponse, getmerchantbranchlistresponse, getmerchantdocumentlistresponse, getmerchantlistgesponse, getmerchantterminallistresponse, getmsaasprotransactionlist, getnadratranlist } from "../actions/externalServiceMonitor";


const initialState = {
  nadraMonitor: [],
  totalcount: 0,
  msaaspro: [],
  msaasprototalcount: 0,
  docOCR: [],
  docOCRtotalcount: 0,
  bioValidation: [],
  bioValidationtotalcount: 0,
  docValidation: [],
  docValidationtotalcount: 0,
  billInquiry: [],
  billInquirytotalcount: 0,
  holdinglist: [],
  holdinglisttotalcount: 0,
  merchantlist: [],
  merchantlisttotalcount: 0,
  merchantbranchlist: [],
  merchantbranchlisttotalcount: 0,
  merchantterminallist: [],
  merchantterminallisttotalcount: 0,
  merchantdocumentlist: [],
  merchantdocumentlisttotalcount: 0,
}

const externalServiceMonitorSlice = createSlice({
  name: "externalServiceMonitor",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getnadratranlist.pending, (state, action) => {
      state.nadraMonitor = []
    });
    builder.addCase(getnadratranlist.fulfilled, (state, action) => {
      state.nadraMonitor = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(getmsaasprotransactionlist.pending, (state, action) => {
      state.msaaspro = []
    });
    builder.addCase(getmsaasprotransactionlist.fulfilled, (state, action) => {
      state.msaaspro = action.payload.list
      state.msaasprototalcount = action.payload.total
    });
    builder.addCase(getdocumentocrlist.pending, (state, action) => {
      state.docOCR = []
    });
    builder.addCase(getdocumentocrlist.fulfilled, (state, action) => {
      state.docOCR = action.payload.list
      state.docOCRtotalcount = action.payload.total
    });
    builder.addCase(getdocumentvalidationlist.pending, (state, action) => {
      state.docValidation = []
    });
    builder.addCase(getdocumentvalidationlist.fulfilled, (state, action) => {
      state.docValidation = action.payload.list
      state.docValidationtotalcount = action.payload.total
    });
    builder.addCase(getbiometricvalidationlist.pending, (state, action) => {
      state.bioValidation = []
    });
    builder.addCase(getbiometricvalidationlist.fulfilled, (state, action) => {
      state.bioValidation = action.payload.list
      state.bioValidationtotalcount = action.payload.total
    });
    builder.addCase(getbillinquirylist.pending, (state, action) => {
      state.billInquiry = []
    });
    builder.addCase(getbillinquirylist.fulfilled, (state, action) => {
      state.billInquiry = action.payload.list
      state.billInquirytotalcount = action.payload.total
    });
    builder.addCase(getholdinglistresponse.pending, (state, action) => {
      state.holdinglist = []
    });
    builder.addCase(getholdinglistresponse.fulfilled, (state, action) => {
      state.holdinglist = action.payload.list
      state.holdinglisttotalcount = action.payload.total
    });
    builder.addCase(getmerchantlistgesponse.pending, (state, action) => {
      state.merchantlist = []
    });
    builder.addCase(getmerchantlistgesponse.fulfilled, (state, action) => {
      state.merchantlist = action.payload.list
      state.merchantlisttotalcount = action.payload.total
    });
    builder.addCase(getmerchantbranchlistresponse.pending, (state, action) => {
      state.merchantbranchlist = []
    });
    builder.addCase(getmerchantbranchlistresponse.fulfilled, (state, action) => {
      state.merchantbranchlist = action.payload.list
      state.merchantbranchlisttotalcount = action.payload.total
    });
    builder.addCase(getmerchantterminallistresponse.pending, (state, action) => {
      state.merchantterminallist = []
    });
    builder.addCase(getmerchantterminallistresponse.fulfilled, (state, action) => {
      state.merchantterminallist = action.payload.list
      state.merchantterminallisttotalcount = action.payload.total
    });
    builder.addCase(getmerchantdocumentlistresponse.pending, (state, action) => {
      state.merchantdocumentlist = []
    });
    builder.addCase(getmerchantdocumentlistresponse.fulfilled, (state, action) => {
      state.merchantdocumentlist = action.payload.list
      state.merchantdocumentlisttotalcount = action.payload.total
    });
  },
});
export default externalServiceMonitorSlice.reducer;