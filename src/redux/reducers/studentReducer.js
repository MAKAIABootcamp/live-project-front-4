import { studentTypes } from "../types/studentType";

const initialState = {
  student: {},
  students: [],
};

const studentReducer = (state = initialState, action) => {
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
          ...action.payload,
        },
      };
    case studentTypes.GET_STUDENT:
      return {
        ...state,
        student: {
          ...action.payload,
        },
      };
    case studentTypes.GET_STUDENTS:
      return {
        ...state,
        students: [...action.payload],
      };
    case studentTypes.UPDATE_STATESTUDENT:
      const updateStudent = state.students.map((item) => {
        if (item.id === action.payload.idStudent) {
          return {
            ...item,
            estado: action.payload.newState,
          };
        }
        return item;
      });

      return {
        ...state,
        students: [...updateStudent],
      };
    default:
      return state;
  }
};

export default studentReducer;
