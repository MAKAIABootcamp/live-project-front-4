import { dataBase } from '../../confiFirebase/configFirebase'
import { collection, getDocs, query, doc } from 'firebase/firestore'
import { courses } from '../types/userTypes'

//Llama a los botones de la página de Estudiantes

export const getPageStudents = (nameCollection) => {
    return async (dispatch) => {
        try {
            const getDataPages = await getDocs(collection(dataBase, nameCollection));
            const pageStudentsData = getDataPages.docs.map((doc) => doc.data());

            dispatch({
                type: courses.LIST_PAGES_STUDENTS,
                payload: pageStudentsData,
            });
        } catch (error) {
            console.log(error);
        }
    }
}


//Llama a los cursos de la página de Selección

// export const getCourses = (nameCollection) => {
//     return async (dispatch) => {
//         try {
//             const getData = await getDocs(collection(dataBase, nameCollection));
//             const coursesData = getData.docs.map((doc) => doc.data());

//             dispatch({
//                 type: courses.LIST_COURSES,
//                 payload: coursesData,
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

export const getCourses = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(dataBase, "Selección"));
            const coursesData = [];

            for (const doc of querySnapshot.docs) {
                
                const coursesId = doc.id;

                const listSnapshot = await getDocs(collection(dataBase, "Selección", coursesId, "groupSelection"));
               
                //Lista de Front-end
                
            const q = query(collection(dataBase, "Selección/Y5oXkNrYrPScwrutBeaF/groupSelection"))
            console.log(q, "q")
            const querySnapshot2 = await getDocs(q);
            console.log(querySnapshot2)

                const listGroupData = [];

                listSnapshot.forEach((listDoc) => {
                    listGroupData.push({id: listDoc.id, name: listDoc.name, ...listDoc.data() });
                });

                coursesData.push({
                    id: coursesId,
                    ...doc.data(),
                    groups: listGroupData,
                });

                console.log("Y queryShanpshot", querySnapshot2)
                 console.log("listGroupData", listGroupData) //Me trae los datos de los estudiantes
                 console.log("coursesData", coursesData)
            }
            // console.log("listGroupData", listGroupData)
            // console.log("coursesData", coursesData)
            /**
             * cuando estes recorriendo courses data aplicas 
             * const q = query(collection(dataBase, "Selección/coursesdata.id/groupSelection"))
            const querySnapshot2 = await getDocs(q);
             */
            dispatch({type: "LIST_COURSES", payload: coursesData});
        } catch (error) {
            console.log("Error fetching courses data: ", error)
        }
    }
}