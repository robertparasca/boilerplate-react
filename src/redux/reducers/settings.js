import {
    FETCHING_INSTITUTE_DATA,
    FETCHING_INSTITUTE_DATA_SUCCESS,
    FETCHING_INSTITUTE_DATA_FAIL,
    RESET_UPLOAD_STATE,
    UPLOAD_STUDENTS_FILE, UPLOAD_STUDENTS_FILE_FAIL,
    UPLOAD_STUDENTS_FILE_SUCCESS,
} from '../actions/settings';

const initialState = {
    loading: false,
    errors: [],
    institute: {
        loading: false,
        errors: [],
        data: {}
    },
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
                institute: {
                    ...state.institute,
                    loading: true
                }
            };
        }
        case FETCHING_INSTITUTE_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                institute: {
                    ...state.institute,
                    loading: false,
                    data: action.institute
                }
            };
        }
        case FETCHING_INSTITUTE_DATA_FAIL: {
            return {
                ...state,
                loading: false,
                institute: {
                    ...state.institute,
                    loading: false,
                    errors: ['You broke something']
                }
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
