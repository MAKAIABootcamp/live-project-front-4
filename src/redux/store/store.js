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
import benefitTypesReducer from "../reducers/benefitTypeReducer";
import { coursesReducer } from "../reducers/coursesReducer";
import newCohorteReducers from "../reducers/newCohorteReducers";

const rootReducer = {
  user: userReducer,
  benefitTypes: benefitTypesReducer, // Asigna el reducer de benefitTypes a la propiedad benefitTypes
  courses: coursesReducer,
  cohort: newCohorteReducers,
  courses: coursesReducer,

};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
