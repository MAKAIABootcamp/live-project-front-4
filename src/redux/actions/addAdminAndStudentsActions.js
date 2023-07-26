import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { dataBase } from "../../confiFirebase/configFirebase";
import { typeFormAdminAndStydents } from "../types/userTypes";

const nameCollection = "users";
const referenceCollection = collection(dataBase, nameCollection);

export const addAdminAndStudentsTypesActionAsync = (userData) => {
  return async (dispatch) => {
    try {
      const docRef = await addDoc(referenceCollection, userData);
      const FormAdminAndStydents = {
        id: docRef.id,
        ...userData,
      };
      dispatch(addAdminAndStudentsTypesActionSync(FormAdminAndStydents, null));
    } catch (error) {
      console.log(error);
      const newError = {
        code: error.code,
        message: error.message,
      };
      dispatch(addAdminAndStudentsTypesActionSync(null, newError));
    }
  };
};

export const addAdminAndStudentsTypesActionSync = (
  newAdminAndStydents,
  error
) => {
  return {
    type: typeFormAdminAndStydents.ADD_FORMADMINSTUDENTS,
    payload: {
      newAdminAndStydents,
      error,
    },
  };
};

export const getAdminAndStudents = () => {
  return async (dispatch) => {
    try {
      // Realiza la consulta a Firestore y obtiene los datos
      const snapshot = await getDocs(referenceCollection); // Elimina ".collection" aquí
      // console.log("llllllllll", snapshot) 
      const data = snapshot.docs.map((doc) => ({id:doc.id, info:doc.data()}));
      // console.log("data getstudents", snapshot) 
      // Dispatch la acción para almacenar los datos en el estado
      dispatch({ type: "GET_FORMADMINSTUDENTS", payload: data });

      return data;
    } catch (error) {
      // Manejo de errores si es necesario
      console.error("Error al obtener los datos:", error);
      throw error;
    }
  };
};


export const updateAdminAndStudentsAction = (updateData) => {
  return async (dispatch) => {
    try {
      // Actualiza los datos del colaborador en Firestore
      // console.log(updateData,"estamos mirando que pasa")
      const docRef = doc(dataBase, nameCollection, updateData.id);
      await updateDoc(docRef, updateData.info);
      // console.log("Datos del colaborador actualizados correctamente.");
    } catch (error) {
      console.error("Error al actualizar los datos del colaborador:", error);
    }
  };
};
