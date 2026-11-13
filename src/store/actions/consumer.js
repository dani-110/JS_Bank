import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const keenuconsumerlist = createAsyncThunk(
  "keenuconsumerlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.keenuconsumerlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.keenuCRMCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.keenuCRMCustomList
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
export const consumerList = createAsyncThunk(
  "consumerList",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerList(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerCustomList,
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
export const getgrouplimits = createAsyncThunk(
  "getgrouplimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getgrouplimits(), data, thunkAPI);
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
export const keenucrmList = createAsyncThunk(
  "keenucrmList",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerList(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.consumerCustomList,
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
export const editconsumer = createAsyncThunk(
  "editconsumer",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editconsumer(), data, thunkAPI);
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

export const getconsumerloadlimits = createAsyncThunk(
  "getconsumerloadlimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerloadlimits(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.consumerLimitsCustomList;
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
export const getconsumerspendlimits = createAsyncThunk(
  "getconsumerspendlimits",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerspendlimits(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.consumerLimitsCustomList;
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

export const consumerwallets = createAsyncThunk(
  "consumerwallets",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerwallets(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.consumerWalletCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return response.data.consumerWalletCustomList;
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
export const getconsumertranlist = createAsyncThunk(
  "getconsumertranlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumertranlist(), data, thunkAPI);
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

export const getconsumerdevice = createAsyncThunk(
  "getconsumerdevice",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getconsumerdevice(), data, thunkAPI);
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
export const setconsumeralloweddevice = createAsyncThunk(
  "setconsumeralloweddevice",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumeralloweddevice(), data, thunkAPI);
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
export const consumerstatushistory = createAsyncThunk(
  "consumerstatushistory",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.consumerstatushistory(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.consumerStatusHistoryList;
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
export const merchantstatushistory = createAsyncThunk(
  "merchantstatushistory",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantstatushistory(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.merchantStatusHistoryList;
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


export const setconsumerdevicestatus = createAsyncThunk(
  "setconsumerdevicestatus",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setconsumerdevicestatus(), data, thunkAPI);
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