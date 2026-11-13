import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getuserauditlog = createAsyncThunk(
  "getuserauditlog",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getuserauditlog(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.auditLogCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.auditLogCustomList,
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