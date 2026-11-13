import { createSlice } from "@reduxjs/toolkit";
import { consumerList, keenucrmList } from "../actions/consumer";


const initialState = {
  consumers: [],
  totalcount: 0,
  keenucrm: [],
  keenucrmtotalcount: 0
}

const consumersSlice = createSlice({
  name: "consumers",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(consumerList.pending, (state, action) => {
      state.consumers = []
    });
    builder.addCase(consumerList.fulfilled, (state, action) => {
      state.consumers = action.payload.list
      state.totalcount = action.payload.total
    });
    builder.addCase(keenucrmList.pending, (state, action) => {
      state.keenucrm = []
    });
    builder.addCase(keenucrmList.fulfilled, (state, action) => {
      state.keenucrm = action.payload.list
      state.totalcountkeenucrm = action.payload.total
    });
  },
  reducers: {
    updateconsumersRecord: (state, action) => {
      const getIndex = state.consumers.findIndex(item => item.cid == action.payload.cid)
      state.consumers[getIndex] = action.payload;
    },
    resetconsumers: (state, action) => {
      state.consumers = []
    },
    resetkeenucrm: (state, action) => {
      state.keenucrm = []
    },
  },
});
export default consumersSlice.reducer;

export const { updateconsumersRecord, resetconsumers, resetkeenucrm } = consumersSlice.actions;