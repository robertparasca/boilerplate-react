import { push } from 'connected-react-router';

import { deleteToken } from './auth';
import { unsetToken } from './axios';

export const handleErrors = (e, dispatch, action) => {
    const { response } = e;
    switch (response.status) {
        case 401: {
            deleteToken();
            unsetToken();
            dispatch(action());
            break;
        }
        case 403: {
            // todo;
            dispatch(push('/forbidden'));
            console.log(123);
            dispatch(action);
            break;
        }
        case 422: {
            dispatch(action);
            break;
        }
        default:
            return;
    }
};
