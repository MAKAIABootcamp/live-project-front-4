import { courses } from "../types/userTypes";
import { collection } from 'firebase/firestore'
import { dataBase } from '../../confiFirebase/configFirebase'

// const nameCollection = 'Cursos';
// const referenceCollection = collection(dataBase, nameCollection)

// const initialValue = {
//     referenceCollection
// }

// export const coursesReducer = (state = initialValue, action ) => {
//     switch (action.type) {
//         case courses.LIST_COURSES:

//         return {
//             ...state
//         }
//     }
// }


const initialState = {
    coursesSelected: [],
    pageStudentsData: [],
    coursesDataCertification: [],
  };

  export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
      case courses.LIST_COURSES_SELECTION:
        return {
          ...state,
          coursesSelected: action.payload,
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
  