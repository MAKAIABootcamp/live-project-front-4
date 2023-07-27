import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { studentTypes } from "../types/studentType";
import { dataBase } from "../../confiFirebase/configFirebase";


const studentCollectionName = "Estudiantes";
const studentsRef = collection(dataBase, studentCollectionName);

export const registerActionAsync = (uid, studentData, programa) => {
  return async (dispatch) => {
    try {
      const student = {
        uid,
        programa,
        estado: ["selección"],
        ...studentData,
      };
      await addDoc(studentsRef, student);   
      dispatch(registerActionSync(student));
    } catch (error) {
      console.log(error);
      return;
    }
  };
};
export const registerActionSync = (student) => {
  return {
    type: studentTypes.SET_STUDENT,
    payload: student,
  };
};

export const updataActionAsync = (telefono, correo, imagen, uid) => {
  return async (dispatch) => {
    try {
      // Crear un objeto con los campos que deseas actualizar
      const dataToUpdate = {
        celular: telefono,
        correo: correo,
        imagen: imagen,
        // Añade aquí cualquier otro campo que desees actualizar
      };

      // Crear una consulta (query) con la cláusula "where" para filtrar por el UID
      const q = query(studentsRef, where("uid", "==", uid));

      // Ejecutar la consulta para obtener los documentos que coinciden con el filtro
      const querySnapshot = await getDocs(q);

      // Actualizar cada documento que coincide con el filtro
      querySnapshot.forEach((docSnapshot) => {
        const studentRef = doc(dataBase, "Estudiantes", docSnapshot.id);
        updateDoc(studentRef, dataToUpdate);
      });
      dispatch(updateActionSync(dataToUpdate));
      Swal.fire("OK!", "Sus datos se han actualizado exitosamente", "success");
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Oops ha ocurrido un error!",
        "Los datos no han sido guardados!",
        "error"
      );
    }
  };
};

const updateActionSync = (dataToUpdate) => {
  return {
    type: studentTypes.UPDATE_STUDENT,
    payload: dataToUpdate,
  };
};

//---Obtener los datos de un estudiante desde la colección Estudiantes

export const getStudentActionAsync = (uid) => {
  return async (dispatch) => {
    try {
      const q = query(studentsRef, where("uid", "==", uid));

      // Ejecutar la consulta para obtener los documentos que coinciden con el filtro
      const querySnapshot = await getDocs(q);
      const student = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(getStudentActionSync(student[0]));
    } catch (error) {
      console.log(error);
    }
  };
};

const getStudentActionSync = (student) => {
  return {
    type: studentTypes.GET_STUDENT,
    payload: student,
  };
};

export const getStudentByCourseActionAsync = (course) => {
  return async (dispatch) => {
    try {
      const q = query(studentsRef, where("programa", "==", course));

      // Ejecutar la consulta para obtener los documentos que coinciden con el filtro
      const querySnapshot = await getDocs(q);
      const student = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(getStudentByCourseActionSync(student));
    } catch (error) {
      console.log(error);
    }
  };
};

const getStudentByCourseActionSync = (students) => {
  return {
    type: studentTypes.GET_STUDENTS,
    payload: students,
  };
};

export const updateStudentStateActionAsync = (idStudent, newState) => {
  return async (dispatch) => {
    try {
      const studentRef = doc(dataBase, studentCollectionName, idStudent);
      await updateDoc(studentRef, { estado: [...newState] });
      dispatch(updateStudentStateActionSync(idStudent, newState));
    } catch (error) {
      console.log(error);
    }
  };
};

const updateStudentStateActionSync = (idStudent, newState) => {
  return {
    type: studentTypes.UPDATE_STATESTUDENT,
    payload: {
      idStudent,
      newState,
    },
  };
};
