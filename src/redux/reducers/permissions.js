import { FETCHING_PERMISSIONS, FETCHING_PERMISSIONS_SUCCESS } from '../actions/permissions';

const initialState = {
    loading: false,
    errors: [],
    permissions: []
};

const permissions = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_PERMISSIONS: {
            return {
                ...state,
                loading: true
            };
        }
        case FETCHING_PERMISSIONS_SUCCESS: {
            return {
                ...state,
                loading: false,
                permissions: action.permissions
            };
        }
        default:
            return state;
    }
};

export default permissions;
