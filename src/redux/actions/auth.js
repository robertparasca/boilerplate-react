import axiosInstance from '../../utils/axios';
import { deleteToken, saveToken } from '../../utils/auth';
import { setToken, unsetToken } from '../../utils/axios';
import { config } from '../../utils/config';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_HAPPENING = 'LOGIN_HAPPENING';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_HAPPENING = 'LOGOUT_HAPPENING';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

const formatNameFromGoogle = (name) => {
    return name ? name.split('/')[0] : '';
};

export const login = (googleData) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_HAPPENING });
        try {
            const body = {
                email: googleData.profileObj.email,
                name: formatNameFromGoogle(googleData.profileObj.name),
                first_name: googleData.profileObj.givenName,
                last_name: formatNameFromGoogle(googleData.profileObj.familyName).trim(),
                google_id: googleData.profileObj.googleId,
                image_url: googleData.profileObj.imageUrl,
            };
            if (body.email.split('@')[1] !== config.organization) {
                dispatch({ type: LOGIN_FAILED, errors: [{ message: 'Your account is not part of the organization.' }] })
            } else {
                const response = await axiosInstance.post('/callback', body);
                const { data } = response;
                saveToken(data.access_token);
                setToken(data.access_token);
                dispatch({ type: LOGIN_SUCCESS, user: data.user });
            }
        } catch(e) {
            console.log(e.message);
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        dispatch({ type: LOGOUT_SUCCESS });
        unsetToken();
        deleteToken();
        // todo: to be implemented later;
    };
};

export const me = () => {
    return async (dispatch) => {
        try {
            const data = await axiosInstance.get('/me');
            dispatch({ type: LOGIN_SUCCESS, user: data.data });
        } catch (e) {
            console.log(e);
        }
    };
};

export const refreshToken = () => {
    // todo: to be implemented later;
};

export const loginWithPassword = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_HAPPENING });
        try {
            const body = {
                email,
                password
            };
            const response = await axiosInstance.post('/login-password', body);
            const { data } = response;
            saveToken(data.access_token);
            setToken(data.access_token);
            dispatch({ type: LOGIN_SUCCESS, user: data.user });
        } catch (e) {
            const { status, data } = e.response;
            console.log(e.response, data.errors.message);
            if (status === 422) {
                dispatch({ type: LOGIN_FAILED, errors: [data.errors] });
            }
        }
        // todo: to be implemented later;
    };
};
