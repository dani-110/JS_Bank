import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getgettimporthistory = createAsyncThunk(
  "getgettimporthistory",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getgettimporthistory(), data, thunkAPI);
      console.log(response.data)
      if (response.data.responsecode == 0) {
        if (response.data.oneLinkSettBatchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.oneLinkSettBatchCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getgetraastimporthistory = createAsyncThunk(
  "getgetraastimporthistory",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getgettimporthistory(), data, thunkAPI);
      console.log(response.data)
      if (response.data.responsecode == 0) {
        if (response.data.oneLinkSettBatchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.oneLinkSettBatchCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getraastpayoutdetaillisting = createAsyncThunk(
  "getraastpayoutdetaillisting",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getraastpayoutdetaillisting(), data, thunkAPI);
      console.log(response.data)
      if (response.data.responsecode == 0) {
        if (response.data.raastPayoutDetailList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.raastPayoutDetailList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);


export const taxDataImport = createAsyncThunk(
  "taxDataImport",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getgettimporthistory(), data, thunkAPI);
      console.log(response.data)
      if (response.data.responsecode == 0) {
        if (response.data.oneLinkSettBatchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.oneLinkSettBatchCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getmerchanttaxtranslisting = createAsyncThunk(
  "getmerchanttaxtranslisting",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchanttaxtranslisting(), data, thunkAPI);
      console.log(response.data)
      if (response.data.responsecode == 0) {
        if (response.data.merchantTaxTranCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantTaxTranCustomList,
          total: response.data.totalcount
        };
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getbillpaymentfiledata = createAsyncThunk(
  "getbillpaymentfiledata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbillpaymentfiledata(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.oneLinkSettBatchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.oneLinkSettBatchCustomList
      } else {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const processfile = createAsyncThunk(
  "processfile",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.processfile(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const retransmitfilestatus = createAsyncThunk(
  "retransmitfilestatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.retransmitfilestatus(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);