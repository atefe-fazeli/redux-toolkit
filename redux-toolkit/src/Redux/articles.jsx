import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getArticlesFromServer = createAsyncThunk(
  "articles/getArticlesFromServer",
  async (url) => {
    return axios.get(url).then((res) => res);
  }
);

const slice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getArticlesFromServer.pending]: () => {},
    [getArticlesFromServer.fulfilled]: (state, action) => {},
    [getArticlesFromServer.rejected]: () => {},
  },
});

export default slice.reducer;
