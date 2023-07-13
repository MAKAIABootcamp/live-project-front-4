// import { courses } from "../types/userTypes"

// export const listCourses = (params) => {
//     return {
//         type: courses.LIST_COURSES,
//         payload: params
//     }
// }

import { dataBase } from '../confiFirebase/configFirebase'
import { collection, getDocs } from 'firebase/firestore'
import { courses } from '../types/userTypes'

export const getCourses = (nameCollection) => {
    return async (dispatch) => {
        try {
            const getData = await getDocs(collection(dataBase, nameCollection));
            const coursesData = getData.docs.map((doc) => doc.data());

            dispatch({
                type: courses.LIST_COURSES,
                payload: coursesData,
            });
        } catch (error) {
            console.log(error);
        }
    }
}