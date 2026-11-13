import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

export const getbankslist = createAsyncThunk(
  "getbankslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbankslist(), data, thunkAPI);
      console.log(response)
      if (response.data.responsecode == 0) {
        if (response.data.financialInstitutionCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.financialInstitutionCustomList,
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


export const addbank = createAsyncThunk(
  "addbank",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.addbank(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.financialInstitutionCustomList;
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
export const api3addbank = createAsyncThunk(
  "api3addbank",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.api3addbank(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.financialInstitutionCustomList;
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
export const editbank = createAsyncThunk(
  "editbank",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editbank(), data, thunkAPI);
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
export const api3editbank = createAsyncThunk(
  "api3editbank",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.api3editbank(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return response.data.productLimitCustomList;
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

export const getbillerslist = createAsyncThunk(
  "getbillerslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbillerslist(), data, thunkAPI);
      console.log(response.data.billerCustomList)
      if (response.data.responsecode == 0) {
        if (response.data.billerCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.billerCustomList,
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
export const addbiller = createAsyncThunk(
  "addbiller",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.addbiller(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data.billerCustomList;
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
export const editbiller = createAsyncThunk(
  "editbiller",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editbiller(), data, thunkAPI);
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
export const getlogo = createAsyncThunk(
  "getlogo",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getlogo(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
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
export const getbanklogo = createAsyncThunk(
  "getbanklogo",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getbanklogo(), data, thunkAPI);
      console.log(response)
      if (response.status == 200) {
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

export const getrulelist = createAsyncThunk(
  "getrulelist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getrulelist(), data, thunkAPI);
      console.log(response.data.billerCustomList)
      if (response.data.responsecode == 0) {
        if (response.data.requestBlockingCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: 'Fetched! No data found',
            })
          );
        }
        return {
          list: response.data.requestBlockingCustomList,
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
export const setrule = createAsyncThunk(
  "setrule",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setrule(), data, thunkAPI);
      console.log(response.data)
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
export const setruleelements = createAsyncThunk(
  "setruleelements",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setruleelements(), data, thunkAPI);
      console.log(response.data)
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
export const editrule = createAsyncThunk(
  "editrule",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.editrule(), data, thunkAPI);
      console.log(response.data)
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
export const getruleelementslist = createAsyncThunk(
  "getruleelementslist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getruleelementslist(), data, thunkAPI);
      console.log(response.data)
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