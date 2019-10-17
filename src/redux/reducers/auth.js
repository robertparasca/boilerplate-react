import { LOGIN_HAPPENING, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_HAPPENING } from '../actions/auth';

const initialState = {
    isAuthenticated: false,
    loading: false
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
                loading: false
            };
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }
        }
        default:
            return state;
    }
};

export default auth;
