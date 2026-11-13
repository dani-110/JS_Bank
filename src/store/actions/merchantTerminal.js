import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getmerchantterminallist = createAsyncThunk(
  "getmerchantterminallist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantterminallist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantTerminalCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantTerminalCustomList,
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

export const createmerchantterminal = createAsyncThunk(
  "createmerchantterminal",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createmerchantterminal(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.merchantTerminalCustomList;
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
export const modifymerchantterminal = createAsyncThunk(
  "modifymerchantterminal",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.modifymerchantterminal(), data, thunkAPI);
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
export const linkterminal = createAsyncThunk(
  "linkterminal",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.linkterminal(), data, thunkAPI);
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
export const delinkterminal = createAsyncThunk(
  "delinkterminal",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.delinkterminal(), data, thunkAPI);
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
