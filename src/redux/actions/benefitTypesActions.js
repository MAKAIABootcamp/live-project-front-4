import { collection, addDoc, getDocs } from "firebase/firestore";
import { dataBase } from "../../confiFirebase/configFirebase";
import { typeBenefitTypes } from "../types/userTypes";

const nameCollection = "Beneficios";
const referenceCollection = collection(dataBase, nameCollection);

export const addBenefitTypesActionAsync = (newBenefitType) => {
  return async (dispatch) => {
    try {
      const docRef = await addDoc(referenceCollection, {
        label: newBenefitType,
      });
      const benefitType = {
        id: docRef.id,
        label: newBenefitType,
      };
      dispatch(addBenefitTypesActionSync(benefitType, null));
    } catch (error) {
      console.log(error);
      const newError = {
        code: error.code,
        message: error.message,
      };
      dispatch(addBenefitTypesActionSync(null, newError));
    }
  };
};

export const addBenefitTypesActionSync = (newBenefit, error) => {
  return {
    type: "ADD_BENEFITTYPE",
    payload: {
      newBenefit,
      error,
    },
  };
};

export const getBenefitAction = (nameCollection) => {
  return async (dispatch) => {
    try {
    //   console.log("Fetching benefits from database...");
      const getData = await getDocs(collection(dataBase, nameCollection));
      const typeBenefitData = getData.docs.map((doc) => doc.data());
      // console.log("Fetched benefits:", typeBenefitData);

      dispatch({
        type: typeBenefitTypes.GET_BENEFIT,
        payload: typeBenefitData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
