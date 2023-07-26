// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../reducers/userReducer";
// import benefitTypesReducer from "../reducers/benefitTypeReducer";
// import { coursesReducer } from "../reducers/coursesReducer";
// import newCohorteReducers from "../reducers/newCohorteReducers";
// import addAdminAndStudentsReducer from "../reducers/addAdminAndStudentsReducer";

// const rootReducer = {
//   user: userReducer,
//   benefitTypes: benefitTypesReducer, // Asigna el reducer de benefitTypes a la propiedad benefitTypes
//   courses: coursesReducer,
//   cohort: newCohorteReducers,
//   newAdminAndStydentsType: addAdminAndStudentsReducer,
// };

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== "production",
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import benefitTypesReducer from "../reducers/benefitTypeReducer";
import { coursesReducer } from "../reducers/coursesReducer";
import newCohorteReducers from "../reducers/newCohorteReducers";
import addAdminAndStudentsReducer from "../reducers/addAdminAndStudentsReducer";
import { getCoursesSelection } from "../actions/coursesActions"; // Importa la acción getCoursesSelection para actualizar la lista de cursos seleccionados en Redux

const rootReducer = {
  user: userReducer,
  benefitTypes: benefitTypesReducer,
  courses: coursesReducer,
  cohort: newCohorteReducers,
  newAdminAndStydentsType: addAdminAndStudentsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

