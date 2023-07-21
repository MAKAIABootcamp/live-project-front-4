import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import benefitsReducer from "../reducers/benefitsReducer";

const reducer = {
  user: userReducer,
  benefits: benefitsReducer,
};
const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
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