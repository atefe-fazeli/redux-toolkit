import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getCoursesFromServer = createAsyncThunk(
  "courses/getCoursesFromServer",
  async (url) => {
    return axios.get(url).then((res) => res.data);
  }
);
const slice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getCoursesFromServer.pending]: () => {},
    [getCoursesFromServer.fulfilled]: (state, action) => {
        state.push(...action.payload)
    },
    [getCoursesFromServer.rejected]: (state, action) => {},
  },
});

export default slice.reducer;
