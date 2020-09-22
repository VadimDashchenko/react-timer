import React from "react";

const TimerSpeed = () => (
    <div className="timer-speed">
        <input className="timer-speed__radio" type="radio" name="speed" value="1X" />
        <input className="timer-speed__radio" type="radio" name="speed" value="1.5X" />
        <input className="timer-speed__radio" type="radio" name="speed" value="2X" />
    </div>
)

export default TimerSpeed;