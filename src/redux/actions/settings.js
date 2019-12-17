import axiosInstance from '../../utils/axios';

/** INSTITUTE DATA */
export const FETCHING_INSTITUTE_DATA = 'FETCHING_INSTITUTE_DATA';
export const FETCHING_INSTITUTE_DATA_SUCCESS = 'FETCHING_INSTITUTE_DATA_SUCCESS';
export const FETCHING_INSTITUTE_DATA_FAIL = 'FETCHING_INSTITUTE_DATA_FAIL';
export const UPDATE_INSTITUTE_DATA = 'UPDATE_INSTITUTE_DATA';
export const UPDATE_INSTITUTE_DATA_SUCCESS = 'UPDATE_INSTITUTE_DATA_SUCCESS';
export const UPDATE_INSTITUTE_DATA_FAIL = 'UPDATE_INSTITUTE_DATA_FAIL';

/** UPLOAD STUDENTS FILE */
export const UPLOAD_STUDENTS_FILE = 'UPLOAD_STUDENTS_FILE';
export const UPLOAD_STUDENTS_FILE_SUCCESS = 'UPLOAD_STUDENTS_FILE_SUCCESS';
export const UPLOAD_STUDENTS_FILE_FAIL = 'UPLOAD_STUDENTS_FILE_FAIL';
export const RESET_UPLOAD_STATE = 'RESET_UPLOAD_STATE';

export const fetchInstituteData = () => {
    return async (dispatch) => {
        dispatch({ type: FETCHING_INSTITUTE_DATA });
        try {
            const response = await axiosInstance.get('/institute');
            const { data } = response;
            dispatch({ type: FETCHING_INSTITUTE_DATA_SUCCESS, institute: data[0] });
        } catch (e) {
            console.log(e);
        }
    };
};

export const updateInstituteData = () => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_INSTITUTE_DATA });
        try {
            const response = await axiosInstance.post('/institute');
            const { data } = response;
            dispatch({ type: UPDATE_INSTITUTE_DATA_SUCCESS });
        } catch (e) {
            console.log(e);
        }
    }
};

export const uploadStudentsFile = (file, year) => {
    return async (dispatch) => {
        dispatch({ type: UPLOAD_STUDENTS_FILE });
        if (!file) {
            dispatch({ type: UPLOAD_STUDENTS_FILE_FAIL });
            return;
        }
        const data = new FormData();
        data.append('year', year);
        data.append('file', file, file.name);
        try {
            const response = await axiosInstance.post('/students/import', data);
            // const { data } = response;
            dispatch({ type: UPLOAD_STUDENTS_FILE_SUCCESS });
        } catch (e) {
            dispatch({ type: UPLOAD_STUDENTS_FILE_FAIL });
            console.log(e);
        }
    };
};
