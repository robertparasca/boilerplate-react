import {
    FETCHING_INSTITUTE_DATA,
    FETCHING_INSTITUTE_DATA_SUCCESS, RESET_UPLOAD_STATE,
    UPLOAD_STUDENTS_FILE, UPLOAD_STUDENTS_FILE_FAIL,
    UPLOAD_STUDENTS_FILE_SUCCESS,
} from '../actions/settings';

const initialState = {
    loading: false,
    errors: [],
    institute: {},
    import: {
        loading: false,
        errors: [],
        uploadSuccess: false
    }
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
        case UPLOAD_STUDENTS_FILE: {
            return {
                ...state,
                import: {
                    ...state.import,
                    loading: true
                }
            }
        }
        case UPLOAD_STUDENTS_FILE_SUCCESS: {
            return {
                ...state,
                import: {
                    ...state.import,
                    loading: false,
                    uploadSuccess: true
                }
            };
        }
        case UPLOAD_STUDENTS_FILE_FAIL: {
            return {
                ...state,
                import: {
                    ...state.import,
                    loading: false,
                    uploadSuccess: false,
                    errors: ['You broke something']
                }
            };
        }
        case RESET_UPLOAD_STATE: {
            return {
                ...state,
                import: {
                    ...state.import,
                    ...initialState.import
                }
            }
        }
        default:
            return state;
    }
};

export default permissions;
