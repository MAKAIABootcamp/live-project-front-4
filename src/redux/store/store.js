import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import benefitTypesReducer from "../reducers/benefitTypeReducer";
import { coursesReducer } from "../reducers/coursesReducer";
import newCohorteReducers from "../reducers/newCohorteReducers";
import addAdminAndStudentsReducer from "../reducers/addAdminAndStudentsReducer";
import getStudentsProfileBenefit from "../reducers/getStudentsProfileBenefitsReducers";
import getBenefitSoliciReducers from "../reducers/getBenefitSolicitReducers";

const rootReducer = {
  user: userReducer,
  benefitTypes: benefitTypesReducer, // Asigna el reducer de benefitTypes a la propiedad benefitTypes
  courses: coursesReducer,
  cohort: newCohorteReducers,
  newAdminAndStydentsType: addAdminAndStudentsReducer,
  studentReducer: getStudentsProfileBenefit,
  BeneficiosSolicitados: getBenefitSoliciReducers,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
