import {
    CHANGE_USER_PERMISSION, CHANGE_USER_PERMISSION_ERROR,
    CHANGE_USER_PERMISSION_SUCCESS,
    FETCHING_USER,
    FETCHING_USER_SUCCESS,
} from '../actions/editUserPermissions';

const initialState = {
    loading: false,
    errors: [],
    user: null,
    changePermissionLoading: false,
    changePermissionSuccess: false,
    changePermissionFail: false
};

const editUserPermissions = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_USER: {
            return {
                ...state,
                loading: true
            };
        }
        case FETCHING_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.user
            };
        }
        case CHANGE_USER_PERMISSION: {
            return {
                ...state,
                changePermissionLoading: true
            };
        }
        case CHANGE_USER_PERMISSION_SUCCESS: {
            return {
                ...state,
                changePermissionSuccess: true,
                changePermissionLoading: false
            };
        }
        case CHANGE_USER_PERMISSION_ERROR: {
            return {
                ...state,
                changePermissionFail: true,
                changePermissionLoading: false
            };
        }
        default:
            return state;
    }
};

export default editUserPermissions;
