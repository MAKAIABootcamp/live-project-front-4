import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../confiFirebase/configFirebase";
import { benefitsTypes } from "../types/benefitsType";

export const setBenefits = () => {
  return async (dispatch) => {
    try {
      const snapshot = await getDocs(collection(dataBase, "Beneficios"));
      const benefitsData = snapshot.docs.map((doc) => doc.data().label);

      // Dispatch la acción para almacenar los beneficios en el store
      dispatch({
        type: benefitsTypes.SET_BENEFITS,
        payload: benefitsData,
      });
    } catch (error) {
      console.error("Error al obtener los beneficios:", error);
    }
  };
};
