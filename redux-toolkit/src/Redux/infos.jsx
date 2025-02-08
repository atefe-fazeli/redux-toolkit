import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getInfosFromServer = createAsyncThunk(
  "infos/getInfosFromServer",
  async (url) => {
    return axios.get(url).then((res) => res);
  }
);

const slice = createSlice({
  name: "infos",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getInfosFromServer.pending]: () => {},
    [getInfosFromServer.fulfilled]: (state, action) => {},
    [getInfosFromServer.rejected]: () => {},
  },
});

export default slice.reducer;
