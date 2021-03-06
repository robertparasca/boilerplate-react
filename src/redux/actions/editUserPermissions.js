import { push } from 'connected-react-router';

import axiosInstance from '../../utils/axios';
import { handleErrors } from '../../utils/handleErrors';
import { LOGIN_HAPPENING } from './auth';

export const FETCHING_USER = 'FETCHING_USER';
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';
export const FETCHING_USER_ERROR = 'FETCHING_USER_ERROR';
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
            const action = { type: FETCHING_USER_ERROR };
            dispatch(push('/forbidden'));
            // dispatch(action);
            // handleErrors(e, dispatch, action);
        }
    };
};

export const changePermission = (userId, permissionId, state, refreshNeeded) => {
    return async (dispatch) => {
        dispatch({ type: CHANGE_USER_PERMISSION });
        const body = {
            permissionId,
            state: state ? 1 : 0
        };
        try {
            const response = await axiosInstance.post(`/users/${userId}/edit-permissions`, body);
            dispatch({ type: CHANGE_USER_PERMISSION_SUCCESS });
            if (refreshNeeded) {
                dispatch({ type: LOGIN_HAPPENING });
            }
        } catch (e) {
            console.log(e);
            dispatch(push('/forbidden'));
            const action = { type: CHANGE_USER_PERMISSION_ERROR };
            handleErrors(e, dispatch, action);
        }
    };
};
