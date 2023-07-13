import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import { coursesReducer } from "../reducers/coursesReducer";
const reducer = {
  user: userReducer,
  courses: coursesReducer
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

// import { createStore } from "redux";
// import superUserReducer from "./reducers";

// const store = createStore(superUserReducer);

// export default store;