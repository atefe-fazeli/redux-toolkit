import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import coursesReducer from "./courses";
import articlesReducer from "./articles";
import infosReducer from "./infos";

const store = configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
    articles: articlesReducer,
    infos: infosReducer,
  },
  devTools: true,
});
export default store;
