import { courses } from "../types/userTypes";

const initialState = {
    coursesData: [],
    pageStudentsData: [],
};

export const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case courses.LIST_COURSES:
            return {
                ...state,
                coursesData: action.payload,
            };

            default:
                return state;

     case courses.LIST_PAGES_STUDENTS:
        return {
            ...state,
            pageStudentsData: action.payload,
        } 
    }

    
}