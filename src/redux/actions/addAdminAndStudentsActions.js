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

export const getAdminAndStudents = (nameCollection) => {
  return async (dispatch) => {
    try {
      console.log("Fetching benefits from database...");
      const getData = await getDocs(collection(dataBase, nameCollection));
      const typeFormAdminAndStydentsData = getData.docs.map((doc) =>
        doc.data()
      );
      console.log("Fetched benefits:", typeFormAdminAndStydentsData);

      dispatch({
        type: typeFormAdminAndStydents.GET_FORMADMINSTUDENTS,
        payload: typeFormAdminAndStydentsData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
