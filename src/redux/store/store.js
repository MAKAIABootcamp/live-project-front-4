import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import benefitTypesReducer from "../reducers/benefitTypeReducer";
import { coursesReducer } from "../reducers/coursesReducer";
import newCohorteReducers from "../reducers/newCohorteReducers";
import addAdminAndStudentsReducer from "../reducers/addAdminAndStudentsReducer";

const rootReducer = {
  user: userReducer,
  benefitTypes: benefitTypesReducer, // Asigna el reducer de benefitTypes a la propiedad benefitTypes
  courses: coursesReducer,
  cohort: newCohorteReducers,
  newAdminAndStydentsType: addAdminAndStudentsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
