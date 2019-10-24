import { LOGIN_HAPPENING, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_HAPPENING } from '../actions/auth';
import { isTokenSet } from '../../utils/auth';

const initialState = {
    isAuthenticated: isTokenSet(),
    loading: false,
    user: null
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
                user: action.user
            };
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        }
        default:
            return state;
    }
};

export default auth;
