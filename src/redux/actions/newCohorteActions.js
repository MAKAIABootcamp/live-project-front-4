import { collection, addDoc, getDocs } from "firebase/firestore";
import { dataBase } from "../../confiFirebase/configFirebase";
import { typeCohort } from "../types/userTypes";

export const nameCollectionCohortes = "Cohortes";
const referenceCollection = collection(dataBase, nameCollectionCohortes);

export const addNewCohorTypestAsync = (newCohort) => {
  return async (dispatch) => {
    try {
      const docRef = await addDoc(referenceCollection, {
        cohort: newCohort,
      });
      const cohort = {
        id: docRef.id,
        cohort: newCohort,
      };
      dispatch(addNewCohortypesActionSync(cohort, null));
    } catch (error) {
      console.log(error);
      const newError = {
        code: error.code,
        message: error.message,
      };
      dispatch(addNewCohortypesActionSync(null, newError));
    }
  };
};

export const addNewCohortypesActionSync = (newCohort, error) => {
  return {
    type: typeCohort.ADD_COHORT,
    payload: {
      newCohort,
      error,
    },
  };
};

export const getCohortAction = () => {
  return async (dispatch) => {
    try {
      const cohortRef = collection(dataBase, "Cohortes");
      const cohortSnapshot = await getDocs(cohortRef);
      const cohort = cohortSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch({
        type: typeCohort.GET_COHORT,
        payload: cohort,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
