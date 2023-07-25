import { typeCourseTypes } from "../types/userTypes";

export const addNewTypeCourseAsync = () => {
  return async (dispatch) => {
    try {
    } catch (error) {
      console.log(error);
      const newError = {
        code: error.code,
        message: error.message,
      };

      dispatch(addNewTypeCourseSync({}, newError));
    }
  };
};

export const addNewTypeCourseSync = (newCourseType, error) => {
  return {
    type: typeCourseTypes.ADD_TYPECOURSE,
    payload: {
      newCourseType,
      error,
    },
  };
};
