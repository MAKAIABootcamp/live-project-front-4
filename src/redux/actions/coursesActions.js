import { dataBase } from "../../confiFirebase/configFirebase";
import { collection, getDocs } from "firebase/firestore";
import { courses } from "../types/userTypes";
import { typeStudents } from "../types/userTypes";

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
  };
};

export const getByCollectionName = (nameCollection) => {
  const estudiantesSeleccionados = [];
  return async (dispatch) => {
    try {
      const seleccionados = await getDocs(collection(dataBase, nameCollection));
      //const coursesData = getData.docs.map((doc) => doc.data());
      seleccionados.forEach((doc) => {
        estudiantesSeleccionados.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      console.log(estudiantesSeleccionados);
      dispatch(getCoursesSelectionSync(estudiantesSeleccionados));
    }
  };
};

export const getStudents = (nameCollection) => {
  return async (dispatch) => {
    try {
      console.log("::\n nombre colección", nameCollection);
      const snapshot = await getDocs(collection(dataBase, nameCollection));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        info: doc.data(),
      }));
      dispatch({ type: typeStudents.GET_DATA_STUDENTS, payload: data });

      return data;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      throw error;
    }
  };
};

const getCoursesSelectionSync = (estudiantes) => {
  return {
    type: courses.LIST_COURSES_SELECTION,
    payload: estudiantes,
  };
};

export const selectCourse = (course) => {
  return {
    type: courses.SELECT_COURSE,
    payload: course,
  };
};

export const getCoursesCertification = (nameCollection) => {
  return async (dispatch) => {
    try {
      const getDataCertified = await getDocs(
        collection(dataBase, nameCollection)
      );
      const coursesDataCertification = getDataCertified.docs.map((doc) =>
        doc.data()
      );

      dispatch({
        type: courses.LIST_COURSES_CERTIFICATION,
        payload: coursesDataCertification,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
