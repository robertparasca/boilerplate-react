import axiosInstance from '../../utils/axios';

export const CREATE_TICKET_SUCCESS = 'CREATE_TICKET_SUCCESS';
export const LOADING_TICKET = 'LOADING_TICKET';
export const RESET_TICKET_STATE = 'RESET_TICKET_STATE';

export const createTicker = (reason) => {
    return async (dispatch) => {
        dispatch({ type: LOADING_TICKET });
        try {
            const response = await axiosInstance.post('/tickets', { reason });
            dispatch({ type: CREATE_TICKET_SUCCESS, ticket: response.data });
        } catch (e) {
            console.log(e);
        }
    }
};
