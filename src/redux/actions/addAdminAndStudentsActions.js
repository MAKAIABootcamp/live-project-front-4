import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  where,
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
      const snapshot = await getDocs(referenceCollection);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        info: doc.data(),
      }));
      dispatch({ type: "GET_FORMADMINSTUDENTS", payload: data });
      return data;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      throw error;
    }
  };
};

export const updateAdminAndStudentsAction = (updateData) => {
  return async (dispatch) => {
    try {
      const docRef = doc(dataBase, nameCollection, updateData.id);
      await updateDoc(docRef, updateData.info);
    } catch (error) {
      console.error("Error al actualizar los datos del colaborador:", error);
    }
  };
};

export const getStudentsByProgramAction = (programa) => {
  return async (dispatch) => {
    try {
      const q = query(
        collection(dataBase, "users"),
        where("programa", "==", programa),
        where("userType", "==", "estudiante")
      );
      const querySnapshot = await getDocs(q);
      const students = querySnapshot.docs.map((doc) => doc.data());
      return students;
    } catch (error) {
      console.error("Error al obtener los estudiantes:", error);
      throw error;
    }
  };
};
