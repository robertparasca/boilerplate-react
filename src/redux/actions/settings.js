import axiosInstance from '../../utils/axios';

export const FETCHING_INSTITUTE_DATA = 'FETCHING_INSTITUTE_DATA';
export const FETCHING_INSTITUTE_DATA_SUCCESS = 'FETCHING_INSTITUTE_DATA_SUCCESS';
export const UPDATE_INSTITUTE_DATA = 'UPDATE_INSTITUTE_DATA';
export const UPDATE_INSTITUTE_DATA_SUCCESS = 'UPDATE_INSTITUTE_DATA_SUCCESS';

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
}
