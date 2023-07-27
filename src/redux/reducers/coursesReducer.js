import { courses, typeCourseTypes, typeStudents } from "../types/userTypes";
import { collection } from 'firebase/firestore'
import { dataBase } from '../../confiFirebase/configFirebase'

const initialState = {
    coursesSelected: [],
    listStudent: [],
    pageStudentsData: [],
    coursesDataCertification: [],
    selectedCourse: null,
  };

  export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
      case typeStudents.GET_DATA_STUDENTS:
        return {
          ...state,
          listStudent: action.payload,
        };

        case courses.LIST_COURSES_SELECTION:
          return {
            ...state,
            coursesSelected: action.payload,
          }

      case courses.SELECT_COURSE: // Agregamos el caso para la acción SELECT_COURSE
      return {
        ...state,
        selectedCourse: action.payload,
      };

  
      case courses.LIST_PAGES_STUDENTS:
        return {
          ...state,
          pageStudentsData: action.payload,
        };
  
      case courses.LIST_COURSES_CERTIFICATION:
        return {
          ...state,
          coursesDataCertification: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  

// const initialState = {
//     coursesData: [],
//     pageStudentsData: [],
//   };
  
//   export const coursesReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case courses.LIST_COURSES_SELECTION:
//         return {
//           ...state,
//           coursesData: action.payload,
//         };
  
//       case courses.LIST_PAGES_STUDENTS:
//         return {
//           ...state,
//           pageStudentsData: action.payload,
//         };
  
//       default:
//         return state;
//     }
//   };
  