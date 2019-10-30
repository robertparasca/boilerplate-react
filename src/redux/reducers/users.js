import { LOADING_USERS, LOADING_USERS_FINISHED } from '../actions/users';

const initialState = {
    loading: false,
    errors: [],
    users: null
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_USERS: {
            return {
                ...state,
                loading: true
            };
        }
        case LOADING_USERS_FINISHED: {
            return {
                ...state,
                users: action.users,
                loading: false
            };
        }
        default:
            return state;
    }
};

export default users;
