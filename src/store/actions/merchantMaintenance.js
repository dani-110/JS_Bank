import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../interfaces/api.interface";
import HttpService from "../../service/http.service";
import { uiActions } from "../reducers/ui-slice";

//=============================DBA================================

export const getmakerlisting = createAsyncThunk(
  "getmakerlisting",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmakerlisting(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.merchantCustomList,
          total: response.data.totalcount
        }
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
export const getmerchantupgraderequestlist = createAsyncThunk(
  "getmerchantupgraderequestlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantupgraderequestlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantUpgradeCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: response.data.respdescription,
            })
          );
        }
        return {
          list: response.data.merchantUpgradeCustomList,
          total: response.data.totalcount
        }
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

export const getmerchantupgradeAuthorizerrequestlist = createAsyncThunk(
  "getmerchantupgradeAuthorizerrequestlist",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantupgraderequestlist(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        if (response.data.merchantUpgradeCustomList.length == 0) {
          thunkAPI.dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success!",
              message: response.data.respdescription,
            })
          );
        }
        return {
          list: response.data.merchantUpgradeCustomList,
          total: response.data.totalcount
        }
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
export const getcheckerlisting = createAsyncThunk(
  "getcheckerlisting",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getcheckerlisting(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        return {
          list: response.data.merchantCustomList,
          total: response.data.totalcount
        }
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

export const getchangedba = createAsyncThunk(
  "getchangedba",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getchangedba(), data, thunkAPI);
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
export const reviewrequpgradeproduct = createAsyncThunk(
  "reviewrequpgradeproduct",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.reviewrequpgradeproduct(), data, thunkAPI);
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
export const authorizerrequpgradeproduct = createAsyncThunk(
  "authorizerrequpgradeproduct",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.authorizerrequpgradeproduct(), data, thunkAPI);
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

export const createchangedba = createAsyncThunk(
  "createchangedba",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createchangedba(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
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
      return thunkAPI.rejectWithValue();
    }
  }
);
export const postchangedba = createAsyncThunk(
  "postchangedba",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.postchangedba(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
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
      return thunkAPI.rejectWithValue();
    }
  }
);

//=============================ADDRESS================================

export const getchangeaddress = createAsyncThunk(
  "getchangeaddress",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getchangeaddress(), data, thunkAPI);
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

export const createchangeaddress = createAsyncThunk(
  "createchangeaddress",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createchangeaddress(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
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
      return thunkAPI.rejectWithValue();
    }
  }
);
export const postchangeaddress = createAsyncThunk(
  "postchangeaddress",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.postchangeaddress(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
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
      return thunkAPI.rejectWithValue();
    }
  }
);

//=============================MDR================================

export const getchangemdr = createAsyncThunk(
  "getchangemdr",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getchangemdr(), data, thunkAPI);
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

export const createchangemdr = createAsyncThunk(
  "createchangemdr",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createchangemdr(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
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
      return thunkAPI.rejectWithValue();
    }
  }
);
export const postchangemdr = createAsyncThunk(
  "postchangemdr",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.postchangemdr(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
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
      return thunkAPI.rejectWithValue();
    }
  }
);


//=============================TIP================================

export const getchangetip = createAsyncThunk(
  "getchangetip",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getchangetip(), data, thunkAPI);
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

export const createchangetip = createAsyncThunk(
  "createchangetip",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.createchangetip(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
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
      return thunkAPI.rejectWithValue();
    }
  }
);
export const postchangetip = createAsyncThunk(
  "postchangetip",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.postchangetip(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
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
      return thunkAPI.rejectWithValue();
    }
  }
);

export const postservicesrequest = createAsyncThunk(
  "postservicesrequest",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.postservicesrequest(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data
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
export const setraastsqrflag = createAsyncThunk(
  "setraastsqrflag",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.setraastsqrflag(), data, thunkAPI);
      if (response.data.responsecode == 0) {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "success",
            title: "Success!",
            message: response.data.respdescription,
          })
        );
        return response.data
      } else {
        thunkAPI.dispatch(
          uiActions.showResponseNotification({
            status: "error",
            title: "Failed!",
            message: response.data.respdescription,
          })
        );
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getmerchantservice = createAsyncThunk(
  "getmerchantservice",
  async (data, thunkAPI) => {
    try {
      const response = await HttpService.call(api.getmerchantservice(), data, thunkAPI);
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
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);