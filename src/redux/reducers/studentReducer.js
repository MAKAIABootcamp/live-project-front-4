import { studentTypes } from "../types/studentType";


const initialState = {
  student: {},
};

const  studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case studentTypes.SET_STUDENT:
      return {
        ...state,
        student: action.payload,
      };
    
    case studentTypes.UPDATE_STUDENT:
      return {
        ...state,
        student: {
          ...state.student,
          ...action.payload
        }
      }
    default:
      return state;
  }
};

export default  studentReducer;