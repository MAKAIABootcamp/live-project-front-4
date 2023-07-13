import { typeBenefitTypes } from "../types/userTypes";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../confiFirebase/configFirebase";

const nameCollection = "Beneficios";
const referenceCollection = collection(dataBase, nameCollection);

export const addBenefitTypesActionAsync = (newBenefitType) => {
  return async (dispatch) => {
    try {
      const benefitTypeReference = await addDoc(
        referenceCollection,
        newBenefitType
      );

      const benefitType = {
        id: benefitTypeReference.id,
        label: newBenefitType,
      };

      dispatch(addBenefitTypesActionSync(benefitType, false));
    } catch (error) {
      console.log(error);
      const newError = {
        code: error.code,
        message: error.message,
      };
      dispatch(addBenefitTypesActionSync({}, newError));
    }
  };
};

export const addBenefitTypesActionSync = (newBenefit, error) => {
  return {
    type: typeBenefitTypes.ADD_BENEFITTYPE,
    payload: {
      newBenefit,
      error,
    },
  };
};
