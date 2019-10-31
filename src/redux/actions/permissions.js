import axiosInstance from '../../utils/axios';

export const FETCHING_PERMISSIONS = 'FETCHING_PERMISSIONS';
export const FETCHING_PERMISSIONS_SUCCESS = 'FETCHING_PERMISSIONS_SUCCESS';

export const fetchPermissions = () => {
    return async (dispatch) => {
        dispatch({ type: FETCHING_PERMISSIONS });
        try {
            const response = await axiosInstance.get('/permissions');
            const { data } = response;
            dispatch({ type: FETCHING_PERMISSIONS_SUCCESS, permissions: data.permissions });
        } catch (e) {
            console.log(e);
        }
    };
};
