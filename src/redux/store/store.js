import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import benefitTypesReducer from "../reducers/benefitTypeReducer";
import { coursesReducer } from "../reducers/coursesReducer";
import newCohorteReducers from "../reducers/newCohorteReducers";
import addAdminAndStudentsReducer from "../reducers/addAdminAndStudentsReducer";
import benefitsReducer from "../reducers/benefitsReducer";
import studentReducer from "../reducers/studentReducer";
import getStudentsProfileBenefit from "../reducers/getStudentsProfileBenefitsReducers";
import getBenefitSoliciReducers from "../reducers/getBenefitSolicitReducers";


const reducer = {
  user: userReducer,
  benefitTypes: benefitTypesReducer,
  courses: coursesReducer,
  cohort: newCohorteReducers,
  newAdminAndStydentsType: addAdminAndStudentsReducer,
  benefits: benefitsReducer,
  student: studentReducer,
  studentReducer: getStudentsProfileBenefit,
  BeneficiosSolicitados: getBenefitSoliciReducers,
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
