import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";

import { uiActions } from "../reducers/ui-slice";
import HttpService from "../../service/http.service";

export const login = createAsyncThunk(
  "login",
  async ({ username, password, salt, audittrace, actuser }, thunkAPI) => {
    try {
      const response = await HttpService.call(api.login(), { username, password, salt, audittrace, actuser }, thunkAPI);
      if (response.data.responsecode == 0) {
        // thunkAPI.dispatch(
          
        // );
        return { user: response.data, username, password };
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
      thunkAPI.dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Authorization Failed!",
          message: "Invalid Username/Password",
        })
      );
      return thunkAPI.rejectWithValue();
    }
  }
);
export const logout = createAsyncThunk(
  "logout",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.logout(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Authorized!",
            message: response.data.respdescription,
          })
        );
        return response.data
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      thunkAPI.dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Authorization Failed!",
          message: "Invalid Username/Password",
        })
      );
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getdashboarddata = createAsyncThunk(
  "getdashboarddata",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getdashboarddata(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Authorized!",
            message: response.data.respdescription,
          })
        );
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
      thunkAPI.dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Authorization Failed!",
          message: "Invalid Username/Password",
        })
      );
      return thunkAPI.rejectWithValue();
    }
  }
);
