import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import benefitTypesReducer from "../reducers/benefitTypeReducer";
import { coursesReducer } from "../reducers/coursesReducer";
import newCohorteReducers from "../reducers/newCohorteReducers";
import addAdminAndStudentsReducer from "../reducers/addAdminAndStudentsReducer";
import { getCoursesSelection } from "../actions/coursesActions"; // Importa la acción getCoursesSelection para actualizar la lista de cursos seleccionados en Redux
import getStudentsProfileBenefit from "../reducers/getStudentsProfileBenefitsReducers";
import getBenefitSoliciReducers from "../reducers/getBenefitSolicitReducers";
import benefitsReducer from "../reducers/benefitsReducer";
import studentReducer from "../reducers/studentReducer";

const rootReducer = {
  user: userReducer,
  benefitTypes: benefitTypesReducer,
  courses: coursesReducer,
  cohort: newCohorteReducers,
  newAdminAndStydentsType: addAdminAndStudentsReducer,
  studentReducer: getStudentsProfileBenefit,
  BeneficiosSolicitados: getBenefitSoliciReducers,
  benefits: benefitsReducer,
  student: studentReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
