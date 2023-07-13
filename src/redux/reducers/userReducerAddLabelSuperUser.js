import { ADD_ETIQUETA } from "../types/userTypes"; //crear nueva etiqueta

const initialState = {
  label: [], // Inicialmente vacío
};
//para crear nueva etiqueta
const userReducerAddLabelSuperUser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ETIQUETA:
      return {
        ...state,
        label: [...state.label, action.payload],
      };
    default:
      return state;
  }
};

export default userReducerAddLabelSuperUser;
