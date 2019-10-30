import { FETCH_TICKETS_SUCCESS, LOADING_TICKETS, LOADING_TICKETS_FINISHED } from '../actions/tickets';

const initialState = {
    loading: false,
    errors: [],
    tickets: []
};

const tickets = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_TICKETS: {
            return {
                ...state,
                loading: true
            };
        }
        case FETCH_TICKETS_SUCCESS: {
            return {
                ...state,
                tickets: action.tickets,
                loading: false
            };
        }
        case LOADING_TICKETS_FINISHED: {
            return {
                ...state,
                loading: false
            };
        }
        default:
            return state;
    }
};

export default tickets;
