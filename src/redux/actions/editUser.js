import axiosInstance from '../../utils/axios';

export const FETCHING_USER = 'FETCHING_USER';
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';
export const CHANGE_USER_PERMISSION = 'CHANGE_USER_PERMISSION';
export const CHANGE_USER_PERMISSION_SUCCESS = 'CHANGE_USER_PERMISSION_SUCCESS';
export const CHANGE_USER_PERMISSION_ERROR = 'CHANGE_USER_PERMISSION_ERROR';

export const fetchUser = (id) => {
    return async (dispatch) => {
        dispatch({ type: FETCHING_USER });
        try {
            const response = await axiosInstance.get(`/users/${id}`);
            const { data } = response;
            dispatch({ type: FETCHING_USER_SUCCESS, user: data.user });
        } catch (e) {
            console.log(e);
            dispatch({ type: FETCHING_USER_SUCCESS });
        }
    };
};

export const changePermission = (userId, permissionId, state) => {
    return async (dispatch) => {
        dispatch({ type: CHANGE_USER_PERMISSION });
        const body = {
            permissionId,
            state: state ? 1 : 0
        };
        try {
            const response = await axiosInstance.post(`/users/${userId}/edit-permissions`, body);
            dispatch({ type: CHANGE_USER_PERMISSION_SUCCESS });

        } catch (e) {
            console.log(e);
        }
    };
};
