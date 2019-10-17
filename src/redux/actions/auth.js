import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_HAPPENING = 'LOGIN_HAPPENING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const login = (email) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_HAPPENING });
        console.log(email);
        try {
            const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(data);
            setTimeout(() => dispatch({ type: LOGIN_SUCCESS }), 5000);
            // dispatch({ type: LOGIN_SUCCESS })
        } catch(e) {
            console.log(e);
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            const data = await axios.get('/');
            dispatch({ LOGOUT_SUCCESS });
        } catch(e) {
            console.log(e);
        }
    };
};
