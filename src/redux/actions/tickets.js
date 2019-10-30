import axiosInstance from '../../utils/axios';
import dayjs from 'dayjs';
import { config } from '../../utils/config';

export const LOADING_TICKETS = 'LOADING_TICKETS';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const LOADING_TICKETS_FINISHED = 'LOADING_TICKETS_FINISHED';

export const fetchTickets = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING_TICKETS });
        try {
            const response = await axiosInstance.get('/tickets');
            const tickets = response.data.tickets.map((ticket) => ({
                ...ticket,
                key: ticket.id,
                date: dayjs(ticket.created_at).format(config.dateFormat.viewComplex)
            }));
            dispatch({ type: FETCH_TICKETS_SUCCESS, tickets });
        } catch (e) {
            console.log(e);
        }
    };
};

export const acceptTicket = (ticketId) => {
    return async (dispatch) => {
        dispatch({ type: LOADING_TICKETS });
        try {
            // const response = await axiosInstance.post(`/tickets/validate/${ticketId}`);
            dispatch({ type: LOADING_TICKETS_FINISHED });
        } catch (e) {
            console.log(e);
        }
    };
};

export const rejectTicket = (ticketId, rejectReason) => {
    return async (dispatch) => {
        console.log(ticketId, rejectReason);
        dispatch({ type: LOADING_TICKETS });
        try {
            // const response = await axiosInstance.post(`/tickets/reject/1`);
            dispatch({ type: LOADING_TICKETS_FINISHED });
        } catch (e) {
            console.log(e);
            dispatch({ type: LOADING_TICKETS_FINISHED });
        }
    };
};
