import { dataBase } from "../../confiFirebase/configFirebase";
import { collection, getDocs } from "firebase/firestore";
import { typeStudents } from "../types/userTypes";

const nameCollection = "Estudiantes";

export const getStudentsProfileBenefits = () => {
  return async (dispatch) => {
    try {
      const getData = await getDocs(collection(dataBase, nameCollection));
      const typeStudentsData = getData.docs.map((doc) => doc.data());
      dispatch({
        type: typeStudents.GET_ESTUDIANTES_SUCCESS,
        payload: typeStudentsData,
      });
      return typeStudentsData;
    } catch (error) {
      console.log(error);
    }
  };
};
