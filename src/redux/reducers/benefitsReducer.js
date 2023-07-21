import { benefitsTypes } from "../types/benefitsType";

const initialState = {
  benefitsList: [],
};

const benefitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case benefitsTypes.SET_BENEFITS:
      return {
        ...state,
        benefitsList: action.payload,
      };
    default:
      return state;
  }
};

export default benefitsReducer;
