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

export const getCoursesSelection = () => {
    const nameCollection = "Selección";
    const estudiantesSeleccionados = [];
    return async (dispatch) => {
        try {
            const seleccionados = await getDocs(collection(dataBase, nameCollection));
            //const coursesData = getData.docs.map((doc) => doc.data());
            seleccionados.forEach(doc => {
                estudiantesSeleccionados.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            
        } catch (error) {
            console.log(error);
        } finally {
            console.log(estudiantesSeleccionados)
            dispatch(getCoursesSelectionSync(estudiantesSeleccionados));
        }
    }
}

       
const getCoursesSelectionSync = (estudiantes) => {
    return {
        type: courses.LIST_COURSES_SELECTION,
        payload: estudiantes,
    }
}



//PRUEBA PARA PASAR LOS DOCUMENTOS

import { setDoc, deleteDoc } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';

export const moveStudentToSelection = (studentId) => {
  const sourceCollection = 'Estudiantes';
  const destinationCollection = 'Selección';
  const studentsData = useSelector((state) => state.students.studentsData); // Accede a la lista de estudiantes almacenada en Redux
  const dispatch = useDispatch();

  return async () => {
    try {
      const studentToMove = studentsData.find((student) => student.id === studentId);

      if (!studentToMove) {
        console.log('El estudiante no existe en la lista de estudiantes.');
        return;
      }

      // Paso 2: Crea un nuevo documento en la colección de destino
      const destinationDocRef = doc(dataBase, destinationCollection, studentId);
      await setDoc(destinationDocRef, studentToMove);

      // Paso 3: Elimina el documento original de la colección original
      const sourceDocRef = doc(dataBase, sourceCollection, studentId);
      await deleteDoc(sourceDocRef);

      console.log('Estudiante movido exitosamente.');

      // Actualiza la lista de cursos seleccionados en la tienda Redux
      dispatch(getCoursesSelection());

    } catch (error) {
      console.error('Error al mover el estudiante:', error);
    }
  };
};


///////////////////////////////////////////////



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