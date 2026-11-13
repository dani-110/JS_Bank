import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getmerchantlist = createAsyncThunk(
  "getmerchantlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantlist(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        if (response.data.merchantCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
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
export const getmerchantCheckerlist = createAsyncThunk(
  "getmerchantCheckerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
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
export const getbusinessphotosstaging = createAsyncThunk(
  "getbusinessphotosstaging",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbusinessphotosstaging(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data
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
export const editmerchant = createAsyncThunk(
  "editmerchant",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editmerchant(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
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
export const setmerchantpeprisk = createAsyncThunk(
  "setmerchantpeprisk",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setmerchantpeprisk(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
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

export const getmerchantloadlimits = createAsyncThunk(
  "getmerchantloadlimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantloadlimits(), data, thunkAPI);
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
export const getmerchantgrouplimits = createAsyncThunk(
  "getmerchantgrouplimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantgrouplimits(), data, thunkAPI);
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

export const getmerchantspendlimits = createAsyncThunk(
  "getmerchantspendlimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantspendlimits(), data, thunkAPI);
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
export const getmerchantwallets = createAsyncThunk(
  "getmerchantwallets",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantwallets(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.merchantWalletCustomList;
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

export const getmerchanttransactions = createAsyncThunk(
  "getmerchanttransactions",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchanttransactions(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantTransactionCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
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

export const getmerchantdevice = createAsyncThunk(
  "getmerchantdevice",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantdevice(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.deviceCustomList;
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
export const setmerchantalloweddevice = createAsyncThunk(
  "setmerchantalloweddevice",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setmerchantalloweddevice(), data, thunkAPI);
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


export const setmerchantdevicestatus = createAsyncThunk(
  "setmerchantdevicestatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setmerchantdevicestatus(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
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