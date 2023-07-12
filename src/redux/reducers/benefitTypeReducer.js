import { typeBenefitTypes } from "../types/userTypes";

const initialState = {
  benefitTypes: [],
  error: null,
};

const benefitTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeBenefitTypes.ADD_BENEFITTYPE:
      return {
        ...state,
        benefitTypes: [...state.benefitTypes, action.payload.newBenefit],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default benefitTypesReducer;
