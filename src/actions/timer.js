import {
    TIMER_SET_TIMER,
    TIMER_RESET_TIMER,
    TIMER_PLAY_TIMER,
    TIMER_PAUSE_TIMER,
    TIMER_SET_SPEED} from './types/timer';

export const setTimer = payload => ({
    type: TIMER_SET_TIMER,
    payload
});

export const resetTimer = payload => ({
    type: TIMER_RESET_TIMER,
    payload
});

export const playTimer = payload => ({
    type: TIMER_PLAY_TIMER,
    payload
});

export const pauseTimer = payload => ({
    type: TIMER_PAUSE_TIMER,
    payload
});

export const setSpeed = payload => ({
    type: TIMER_SET_SPEED,
    payload
});