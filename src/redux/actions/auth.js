import axiosInstance from '../../utils/axios';
import { deleteToken, saveToken } from '../../utils/auth';
import { setToken, unsetToken } from '../../utils/axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_HAPPENING = 'LOGIN_HAPPENING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_HAPPENING = 'LOGOUT_HAPPENING';

export const login = (email) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_HAPPENING });
        try {
            const data = await axiosInstance.get('https://jsonplaceholder.typicode.com/posts');
            console.log(data);
            // setTimeout(() => dispatch({ type: LOGIN_SUCCESS }), 2000);
            saveToken('123');
            setToken('123');
            dispatch({ type: LOGIN_SUCCESS });
        } catch(e) {
            console.log(e);
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            const data = await axiosInstance.get('/');
            // dispatch({ type: LOGOUT_HAPPENING });
            dispatch({ type: LOGOUT_SUCCESS });
            unsetToken();
            deleteToken();
            // setTimeout(() => dispatch({ type: LOGOUT_SUCCESS }), 1000);
        } catch(e) {
            console.log(e);
        }
    };
};
