// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../reducers/userReducer";
// import userReducerAddLabelSuperUser from "../reducers/userReducerAddLabelSuperUser";

// const rootReducer = {
//   user: userReducer,
//   etiquetas: userReducerAddLabelSuperUser,
// };

// const store = configureStore({
//   reducer: rootReducer,
//   devTool: process.env.NODE_ENV !== "production",
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import userReducerAddLabelSuperUser from "../reducers/userReducerAddLabelSuperUser";

const rootReducer = {
  user: userReducer,
  label: userReducerAddLabelSuperUser, // Renombra el reducer como etiquetas
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
