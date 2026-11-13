import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getholdinglist = createAsyncThunk(
  "getholdinglist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getholdinglist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.holdingCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.holdingCustomList,
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
export const getmerchantposbatchsettlementlist = createAsyncThunk(
  "getmerchantposbatchsettlementlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantposbatchsettlementlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantPOSBatchSettlementCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantPOSBatchSettlementCustomList,
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
export const gettransaction = createAsyncThunk(
  "gettransaction",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.gettransaction(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.transactionCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.transactionCustomList
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
export const getmerchantposbatchsettlementViewTransaction = createAsyncThunk(
  "getmerchantposbatchsettlementViewTransaction",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantposbatchsettlementlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantPOSBatchSettlementCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantPOSBatchSettlementCustomList,
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
export const getmerchanttransactionlistui = createAsyncThunk(
  "getmerchanttransactionlistui",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchanttransactionlistui(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantPOSBatchSettlementCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantPOSBatchSettlementCustomList,
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
export const getmerchantsettlogpos = createAsyncThunk(
  "getmerchantsettlogpos",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantsettlogpos(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantPOSBatchSettlementLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantPOSBatchSettlementLogCustomList,
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
export const getmerchantpospayoutdetailen = createAsyncThunk(
  "getmerchantpospayoutdetailen",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantpospayoutdetailen(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantPOSPayoutDetailENCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantPOSPayoutDetailENCustomList,
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
export const getmerchantsettlogposSAF = createAsyncThunk(
  "getmerchantsettlogposSAF",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantsettlogpos(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantPOSBatchSettlementLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantPOSBatchSettlementLogCustomList,
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
export const getmerchantsettlementpending = createAsyncThunk(
  "getmerchantsettlementpending",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantsettlementpending(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantSettlementPendingCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantSettlementPendingCustomList,
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
export const setimportfiledetails = createAsyncThunk(
  "setimportfiledetails",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setimportfiledetails(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data;
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
export const importmerchantpospayoutdetails = createAsyncThunk(
  "importmerchantpospayoutdetails",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.importmerchantpospayoutdetails(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue(response);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getsettlementsummary = createAsyncThunk(
  "getsettlementsummary",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getsettlementsummary(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantSettMISCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantSettMISCustomList,
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

export const modifyholding = createAsyncThunk(
  "modifyholding",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.modifyholding(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data;
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

export const createholding = createAsyncThunk(
  "createholding",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createholding(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.holdingCustomList;
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