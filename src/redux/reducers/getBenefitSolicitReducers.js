import { typeBenefitSolicitTypes } from "../types/userTypes";

const initialState = {
  beneficiosSolicitados: [], // Actualiza el nombre del estado a 'beneficiosSolicitados'
  error: null,
};

const getBenefitSoliciReducers = (state = initialState, action) => {
  switch (action.type) {
    case typeBenefitSolicitTypes.GET_BENEFIT_SOLICIT_TYPES:
      return {
        ...state,
        beneficiosSolicitados: action.payload,
        error: null,
      };
    case typeBenefitSolicitTypes.GET_BENEFIT_SOLICIT_ERROR:
      return {
        ...state,
        beneficiosSolicitados: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getBenefitSoliciReducers;
