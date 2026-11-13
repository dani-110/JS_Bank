import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const merchantmangementlist = createAsyncThunk(
  "merchantmangementlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantmangementlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantCustomList,
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
export const getmerchantmanagementlist = createAsyncThunk(
  "getmerchantmanagementlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantmanagementlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantCustomList,
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
export const merchantpospayoutdetail = createAsyncThunk(
  "merchantpospayoutdetail",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantpospayoutdetail(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantPOSPayoutDetailCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantPOSPayoutDetailCustomList,
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

export const getentity = createAsyncThunk(
  "getentity",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getentity(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        return response.data;
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

export const createbusiness = createAsyncThunk(
  "createbusiness",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createbusiness(), data, thunkAPI);
      if (response.data.responsecode == 0 || response.payload?.responsecode == 2) {
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
export const getmerchantmember = createAsyncThunk(
  "getmerchantmember",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantmember(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantMemberCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.merchantMemberCustomList;
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
export const editemember = createAsyncThunk(
  "editemember",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editemember(), data, thunkAPI);
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

export const createmember = createAsyncThunk(
  "createmember",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createmember(), data, thunkAPI);
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

export const getmerchantfinancialinfo = createAsyncThunk(
  "getmerchantfinancialinfo",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantfinancialinfo(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.financialDetailsCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.financialDetailsCustomList;
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
export const modifymerchantfinancialinfo = createAsyncThunk(
  "modifymerchantfinancialinfo",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.modifymerchantfinancialinfo(), data, thunkAPI);
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

export const createmerchantfinancialinfo = createAsyncThunk(
  "createmerchantfinancialinfo",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createmerchantfinancialinfo(), data, thunkAPI);
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
