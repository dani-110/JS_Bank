import { createSlice } from "@reduxjs/toolkit";
import { getobauserlist, userlist } from "../actions/users";


const initialState = {
  users: [],
  totalcount: 0,
  getobauserlist: [],
  totalOBAcount: 0
}

const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(userlist.pending, (state, action) => {
      state.users = []
    });
    builder.addCase(userlist.fulfilled, (state, action) => {
      state.users = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(getobauserlist.pending, (state, action) => {
      state.getobauserlist = []
    });
    builder.addCase(getobauserlist.fulfilled, (state, action) => {
      state.getobauserlist = action.payload.list
      state.totalOBAcount = action.payload.total
    });
  },
  reducers: {
    updateUsersRecord: (state, action) => {
      const getIndex = state.users.findIndex(item => item.userid == action.payload.userid)
      state.users[getIndex] = action.payload;
    },
    createUsersRecord: (state, action) => {
      state.users.unshift(action.payload)
    },
    updateOBAUsersRecord: (state, action) => {
      const getIndex = state.getobauserlist.findIndex(item => item.obauid == action.payload.obauid)
      state.getobauserlist[getIndex] = action.payload;
    },
    createOBAUsersRecord: (state, action) => {
      state.getobauserlist.unshift(action.payload)
    },
  },
});
export default usersSlice.reducer;

export const { updateUsersRecord, createUsersRecord,updateOBAUsersRecord, createOBAUsersRecord } = usersSlice.actions;