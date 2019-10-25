import { CREATE_TICKET_SUCCESS, LOADING_TICKET, RESET_TICKET_STATE } from '../actions/ticket';

const initialState = {
    loading: false,
    errors: [],
    ticket: null,
    finished: false
};

const tickets = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_TICKET: {
            return {
                ...state,
                loading: true
            };
        }
        case CREATE_TICKET_SUCCESS: {
            return {
                ...state,
                ticket: action.ticket,
                loading: false,
                finished: true
            };
        }
        case RESET_TICKET_STATE: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
};

export default tickets;
