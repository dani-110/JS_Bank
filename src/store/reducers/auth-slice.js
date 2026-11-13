import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  logout,
} from "../actions/auth";
import cookie from "react-cookies";

const initialState = {
  isLoggedIn: false,
  user: null,
  version: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      // state.isLoggedIn = true;
      const obj = {
        username: action.payload?.username?.toLowerCase(),
        // password: action.payload.password,
        sessionId: action.payload.user.sessionid,
        permissions: JSON.parse(action.payload.user.permissions)
      }
      state.user = obj;
      // localStorage.setItem('openAPI', JSON.stringify(obj));
      localStorage.setItem('openAPILastActive', JSON.stringify(new Date().toISOString()))
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      // localStorage.removeItem('openAPI')
      localStorage.removeItem('openAPILastActive')
    });
  },
  reducers: {
    saveUserData: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    saveVersion: (state, action) => {
      state.version = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      // localStorage.removeItem('openAPI')
      localStorage.removeItem('openAPILastActive')
    },
    setIsLogin: (state, action) => {
      state.isLoggedIn = true;
    },
    saveSessionId: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, sessionId: action.payload.sessionid, permissions: action.payload.permissions };
      }
    }
  },
});
export default authSlice.reducer;

export const { saveUserData, saveVersion, logoutUser, setIsLogin, saveSessionId } = authSlice.actions;
