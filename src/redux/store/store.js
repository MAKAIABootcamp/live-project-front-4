import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import benefitTypesReducer from "../reducers/benefitTypeReducer";
import { coursesReducer } from "../reducers/coursesReducer";
import newCohorteReducers from "../reducers/newCohorteReducers";
import addAdminAndStudentsReducer from "../reducers/addAdminAndStudentsReducer";
import benefitsReducer from "../reducers/benefitsReducer";

const reducer = {
  user: userReducer,
  benefitTypes: benefitTypesReducer, // Asigna el reducer de benefitTypes a la propiedad benefitTypes
  courses: coursesReducer,
  cohort: newCohorteReducers,
  newAdminAndStydentsType: addAdminAndStudentsReducer,
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
