import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getCoursesFromServer = createAsyncThunk(
  "courses/getCoursesFromServer",
  async (url) => {
    axios.get(url).then((res) => res);
  }
);
const slice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getCoursesFromServer.pending]: () => {},
    [getCoursesFromServer.fulfilled]: (state, action) => {},
    [getCoursesFromServer.rejected]: (state, action) => {},
  },
});

export default slice.reducer;
