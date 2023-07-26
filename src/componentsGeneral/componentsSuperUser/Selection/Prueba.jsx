// Importa la función moveStudentToSelection y otras dependencias necesarias
import { moveStudentToSelection } from '../../../redux/actions/coursesActions';
import { useDispatch } from 'react-redux';
import React from 'react';

const EstudiantesList = () => {
const dispatch = useDispatch();

  return async (dispatch) => {
    try {
      // console.log("Fetching benefits from database...");
      const getData = await getDocs(collection(dataBase, nameCollection));
      const typeStudentsData = getData.docs.map((doc) => doc.data());
      // console.log("Fetched benefits:", typeStudentsData);

      dispatch({
        type: typeStudents.GET_ESTUDIANTES_SUCCESS,
        payload: typeStudentsData,
      });
    } catch (error) {
      console.log(error);
    }
  };

};

export default EstudiantesList