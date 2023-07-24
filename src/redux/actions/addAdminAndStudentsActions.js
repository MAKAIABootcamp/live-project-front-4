import { collection, addDoc, getDocs } from "firebase/firestore";
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
      const data = snapshot.docs.map((doc) => doc.data());

      // Dispatch la acción para almacenar los datos en el estado
      dispatch({ type: "GET_FORMADMINSTUDENTS", payload: data });

      return data; // Opcional: puedes devolver los datos si los necesitas en el componente
    } catch (error) {
      // Manejo de errores si es necesario
      console.error("Error al obtener los datos:", error);
      throw error;
    }
  };
};

export const updateAdminAndStudentsAction = (AdminAndStudentsData) => {
  return async (dispatch) => {
    try {
      // Actualiza los datos del colaborador en Firestore
      await dataBase
        .firestore()
        .collection("colaboradores")
        .doc(AdminAndStudentsData.id)
        .update(AdminAndStudentsData);

      // Dispatch la acción para actualizar el estado con los nuevos datos
      dispatch({
        type: "UPDATE_FORMADMINSTUDENTS",
        payload: AdminAndStudentsData,
      });

      console.log("Datos del colaborador actualizados correctamente.");
    } catch (error) {
      console.error("Error al actualizar los datos del colaborador:", error);
    }
  };
};
