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
        benefitTypes: action.payload.newBenefit
          ? [...state.benefitTypes, action.payload.newBenefit]
          : state.benefitTypes,
        error: action.payload.error,
      };
    case typeBenefitTypes.GET_BENEFIT:
      return {
        ...state,
        benefitTypes: action.payload,
      };
    default:
      return state;
  }
};

export default benefitTypesReducer;
