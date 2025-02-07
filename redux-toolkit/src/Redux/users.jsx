import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getUsersFromServer = createAsyncThunk(
  "usesr/getUsersFromServer",
  async (url) => {
    return axios.get(url).then((res) => res.data.users);
  }
);
export const deleteUserFromServer = createAsyncThunk(
  "users/deleteUserFromServer",
  async (url) => {
    return axios.delete(url).then((res) => res);
  }
);
export const createUserinServer = createAsyncThunk(
  "users/deleteUserFromServer",
  async (url, user) => {
    return axios.post(url, user).then((res) => res);
  }
);
const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getUsersFromServer.pending]: (state) => {},
    [getUsersFromServer.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [getUsersFromServer.rejected]: (state, action) => {},
    [deleteUserFromServer.pending]: (state, action) => {},
    [deleteUserFromServer.fulfilled]: (state, action) => {},
    [deleteUserFromServer.rejected]: (state, action) => {},
    [createUserinServer.pending]: (state, action) => {},
    [createUserinServer.fulfilled]: (state, action) => {},
    [createUserinServer.rejected]: (state, action) => {},
  },
});

export default slice.reducer;
