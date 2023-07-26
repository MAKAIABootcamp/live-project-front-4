import { dataBase } from "../../confiFirebase/configFirebase";
import { collection, getDocs } from "firebase/firestore";
import { typeBenefitSolicitTypes } from "../types/userTypes";

const nameCollection = "BeneficiosSolicitados";
export const getBenefitSolicitActions = () => {
  return async (dispatch) => {
    try {
      const getData = await getDocs(collection(dataBase, nameCollection));
      const typeBenefitSolicit = getData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch({
        type: typeBenefitSolicitTypes.GET_BENEFIT_SOLICIT_TYPES,
        payload: typeBenefitSolicit,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
