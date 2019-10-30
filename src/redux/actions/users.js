import axiosInstance from '../../utils/axios';

export const LOADING_USERS_FINISHED = 'LOADING_USERS_FINISHED';
export const LOADING_USERS = 'LOADING_USERS';

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING_USERS });
        try {
            const response = await axiosInstance.get('/users');
            const { data } = response;
            dispatch({ type: LOADING_USERS_FINISHED, users: data.users });
        } catch (e) {
            console.log(e);
        }
    }
};
