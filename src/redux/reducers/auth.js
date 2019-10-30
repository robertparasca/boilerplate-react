import { LOGIN_HAPPENING, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_HAPPENING, LOGIN_FAILED } from '../actions/auth';
import { tokenExists } from '../../utils/auth';

const initialState = {
    isAuthenticated: tokenExists(),
    loading: false,
    user: null,
    errors: [],
    permissions: []
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_HAPPENING:
        case LOGOUT_HAPPENING: {
            return {
                ...state,
                loading: true
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.user,
                errors: [],
                permissions: action.permissions
            };
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                loading: false,
                errors: action.errors
            };
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
                permissions: []
            };
        }
        default:
            return state;
    }
};

export default auth;
