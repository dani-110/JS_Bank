import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getnotificationconfiglist = createAsyncThunk(
  "getnotificationconfiglist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getnotificationconfiglist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.notificationConfigCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.notificationConfigCustomList,
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

export const setnotificationconfig = createAsyncThunk(
  "setnotificationconfig",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setnotificationconfig(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription
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

export const getbroadcastnotificationconfiglist = createAsyncThunk(
  "getbroadcastnotificationconfiglist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbroadcastnotificationconfiglist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.broadcastNotificationCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.broadcastNotificationCustomList,
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

export const setbroadcastnotificationconfig = createAsyncThunk(
  "setbroadcastnotificationconfig",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setbroadcastnotificationconfig(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription
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