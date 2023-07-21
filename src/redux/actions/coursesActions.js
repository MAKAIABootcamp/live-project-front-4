import { dataBase } from '../../confiFirebase/configFirebase'
import { collection, getDocs } from 'firebase/firestore'
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

export const getCoursesSelection = (nameCollection) => {
    return async (dispatch) => {
        try {
            const getData = await getDocs(collection(dataBase, nameCollection));
            const coursesData = getData.docs.map((doc) => doc.data());

            dispatch({
                type: courses.LIST_COURSES_SELECTION,
                payload: coursesData,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

//Llama a los cursos de la página de Certificación

export const getCoursesCertification = (nameCollection) => {
    return async (dispatch) => {
      try {
        const getDataCertified = await getDocs(collection(dataBase, nameCollection));
        const coursesDataCertification = getDataCertified.docs.map((doc) => doc.data());
  
        dispatch({
          type: courses.LIST_COURSES_CERTIFICATION,
          payload: coursesDataCertification,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };