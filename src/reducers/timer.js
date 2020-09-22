import {TIMER_SET_TIMER, TIMER_RESET_TIMER} from '../actions/types/timer';

const initialState = {
    timer: 0
};

export default (state = initialState,action) => {
    switch (action.type) {
        case TIMER_SET_TIMER:
            return{
                ...state,
                timer: action.payload
            }
        case TIMER_RESET_TIMER:
            return{
                ...state,
                timer: action.payload
            }
        default:
            return state;
    }
}