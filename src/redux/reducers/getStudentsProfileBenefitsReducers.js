import { typeStudents } from "../types/userTypes";

const initialState = {
  Estudiantes: [],
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeStudents.GET_ESTUDIANTES_SUCCESS:
      return {
        ...state,
        estudiantes: action.payload,
        error: null,
      };
    case typeStudents.GET_ESTUDIANTES_ERROR:
      return {
        ...state,
        estudiantes: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
