import { createSlice } from "@reduxjs/toolkit";
import { getCovidAsync } from "./services";

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [getCovidAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCovidAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getCovidAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default covidSlice.reducer;
