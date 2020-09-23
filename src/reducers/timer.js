import {TIMER_SET_TIMER, TIMER_RESET_TIMER, TIMER_SET_SPEED, TIMER_PAUSE_TIMER} from '../actions/types/timer';

const initialState = {
    timer: 0,
    speed: 1
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
        case TIMER_SET_SPEED:
            return {
                ...state,
                speed: action.payload
            }
        case TIMER_PAUSE_TIMER:
            return {
                ...state,
                timer: action.payload
            }
        default:
            return state;
    }
}