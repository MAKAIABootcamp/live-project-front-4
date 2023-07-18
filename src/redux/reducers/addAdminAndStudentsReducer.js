import { typeFormAdminAndStydents } from "../types/userTypes";

const initialState = {
  newAdminAndStydentsType: [],
  error: null,
};

const addAdminAndStudentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeFormAdminAndStydents.ADD_FORMADMINSTUDENTS:
      return {
        ...state,
        newAdminAndStydentsType: action.payload.newBenefit
          ? [...state.newAdminAndStydentsType, action.payload.newBenefit]
          : state.newAdminAndStydentsType,
        error: action.payload.error,
      };
    case typeFormAdminAndStydents.GET_FORMADMINSTUDENTS:
      return {
        ...state,
        newAdminAndStydentsType: action.payload, 
      };
    default:
      return state;
  }
};

export default addAdminAndStudentsReducer;
