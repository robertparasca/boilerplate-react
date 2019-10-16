import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_HAPPENING = 'LOGIN_HAPPENING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const loginSuccess = (email) => ({
    type: LOGIN_SUCCESS,
    email
});

export const login = () => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_HAPPENING });
        try {
            const data = await axios.get('/posts');
            console.log(data);
        } catch(e) {

            console.log(e);

        }
    };
};
