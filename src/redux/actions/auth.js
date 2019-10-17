import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_HAPPENING = 'LOGIN_HAPPENING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_HAPPENING = 'LOGOUT_HAPPENING';

export const login = (email) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_HAPPENING });
        try {
            const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(data);
            // setTimeout(() => dispatch({ type: LOGIN_SUCCESS }), 2000);
            dispatch({ type: LOGIN_SUCCESS });
        } catch(e) {
            console.log(e);
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            const data = await axios.get('/');
            dispatch({ type: LOGOUT_HAPPENING });
            // setTimeout(() => dispatch({ type: LOGOUT_SUCCESS }), 2000);
        } catch(e) {
            console.log(e);
        }
    };
};
