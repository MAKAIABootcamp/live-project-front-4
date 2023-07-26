import { typeStudents } from "../types/userTypes";

const initialState = {
  Estudiantes: [], // Cambia el nombre de la propiedad a 'estudiantes'
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeStudents.GET_ESTUDIANTES_SUCCESS:
      // console.log("Updating estudiantes data:", action.payload);
      return {
        ...state,
        estudiantes: action.payload, // Asegúrate de utilizar 'estudiantes' en lugar de 'Estudiantes'
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
