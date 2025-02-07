import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import coursesReducer from './courses'
const store = configureStore({
  reducer: {
    users: usersReducer,
    courses:coursesReducer,
  },
  devTools: true,
});
export default store;
