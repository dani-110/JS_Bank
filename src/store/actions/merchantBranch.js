import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const merchantbranchlist = createAsyncThunk(
  "merchantbranchlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.merchantbranchlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantBranchCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showResponseNotification({
              status: "warning",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.merchantBranchCustomList,
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

export const createmerchantbranch = createAsyncThunk(
  "createmerchantbranch",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createmerchantbranch(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.merchantBranchCustomList;
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
export const modifymerchantbranch = createAsyncThunk(
  "modifymerchantbranch",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.modifymerchantbranch(), data, thunkAPI);
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
