import React, {Component} from "react";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import TimerSpeed from "../../components/TimerSpeed/TimerSpeed";

class Timer extends Component{

    render() {
        return(
            <div className="timer">
                <h2>timer</h2>
                <Input />
                <h1>00:00</h1>
            </div>
        )
    }
}

export default Timer