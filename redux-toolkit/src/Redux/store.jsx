import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: true,
});
export default store;
