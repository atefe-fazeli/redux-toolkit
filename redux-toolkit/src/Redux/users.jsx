import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const getUsersFromServer = createAsyncThunk(
  "usesr/getUsersFromServer",
  async (url) =>{
   return axios.get(url).then((res) => res.data.users);
  }
);
const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersFromServer.pending, (state) => {
        ///
      })
      .addCase(getUsersFromServer.fulfilled, (state, action) => {
        state.push(action.payload)
      })
      .addCase(getUsersFromServer.rejected, (state, action) => {});
  },
});

export default slice.reducer;
