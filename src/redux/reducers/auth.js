import { LOGIN_HAPPENING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/auth';

const initialState = {
    isAuthenticated: false,
    loading: false
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_HAPPENING: {
            return {
                ...state,
                loading: true
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true
            };
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                isAuthenticated: false
            }
        }
        default:
            return state;
    }
};

export default auth;
