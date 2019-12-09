import { FETCHING_INSTITUTE_DATA, FETCHING_INSTITUTE_DATA_SUCCESS } from '../actions/settings';

const initialState = {
    loading: false,
    errors: [],
    institute: {}
};

const permissions = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_INSTITUTE_DATA: {
            return {
                ...state,
                loading: true
            };
        }
        case FETCHING_INSTITUTE_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                institute: action.institute
            };
        }
        default:
            return state;
    }
};

export default permissions;
