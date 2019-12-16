import { LOADING_STUDENTS, LOADING_STUDENTS_SUCCESS, LOADING_STUDENTS_FAIL } from '../actions/students';

const initialState = {
    loading: false,
    errors: [],
    students: null
};

const students = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_STUDENTS: {
            return {
                ...state,
                loading: true
            };
        }
        case LOADING_STUDENTS_SUCCESS: {
            return {
                ...state,
                students: action.students,
                loading: false
            };
        }
        default:
            return state;
    }
};

export default students;
