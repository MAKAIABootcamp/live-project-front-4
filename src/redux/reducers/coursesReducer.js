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
    coursesData: [],
};

export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case courses.LIST_COURSES:
            return {
                ...state,
                coursesData: action.payload,
            };

            default:
                return state;
    }
}