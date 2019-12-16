import axiosInstance from '../../utils/axios';
import { push } from "connected-react-router";

export const LOADING_STUDENTS_SUCCESS = 'LOADING_STUDENTS_SUCCESS';
export const LOADING_STUDENTS_FAIL = 'LOADING_STUDENTS_FAIL';
export const LOADING_STUDENTS = 'LOADING_STUDENTS';

export const fetchStudents = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING_STUDENTS });
        try {
            const response = await axiosInstance.get('/students');
            const { data } = response;
            dispatch({ type: LOADING_STUDENTS_SUCCESS, students: data.students });
        } catch (e) {
            console.log(e);
            dispatch(push('/forbidden'));
        }
    }
};
