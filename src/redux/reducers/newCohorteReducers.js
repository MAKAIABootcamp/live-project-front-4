import { typeCohort } from "../types/userTypes";

const initialState = {
  cohorts: [],
  error: null,
};

const newCohorteReducers = (state = initialState, action) => {
  switch (action.type) {
    case typeCohort.GET_COHORT:
      return {
        ...state,
        cohorts: action.payload,
      };
    default:
      return state;
  }
};

export default newCohorteReducers;
