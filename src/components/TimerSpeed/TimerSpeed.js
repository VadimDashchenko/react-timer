import React from "react";
import PropType from 'prop-types';
import './styles.scss';

const TimerSpeed = (props) => {
    const {changeSpeed} = props;
    return (
        <div className="timer-speed">
            <input
                defaultChecked
                onChange={changeSpeed}
                className="timer-speed__radio"
                type="radio"
                name="speed"
                value="1"
                id="speed1"
            />
            <label htmlFor="speed1">1X</label>
            <input
                onChange={changeSpeed}
                className="timer-speed__radio"
                type="radio"
                name="speed"
                value="1.5"
                id="speed2"
            />
            <label htmlFor="speed2">1.5X</label>
            <input
                onChange={changeSpeed}
                className="timer-speed__radio"
                type="radio"
                name="speed"
                value="2"
                id="speed3"
            />
            <label htmlFor="speed3">2X</label>
        </div>
    )
}

TimerSpeed.propTypes = {
    changeSpeed: PropType.func
}

export default TimerSpeed;