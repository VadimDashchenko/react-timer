import React, {useEffect, useState} from "react";
import classnames from 'classnames';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import TimerSpeed from "../../components/TimerSpeed/TimerSpeed";
import {FaPlayCircle, FaPauseCircle} from 'react-icons/fa';
import {connect} from 'react-redux';
import * as timerActions from '../../actions/timer';
import './styles.scss';

const secondFormat = time => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${secondFormat(seconds)}`;
};

const Timer = (props) => {
    const [counter, setCounter] = useState(props.timer);
    const [start, setStart] = useState(false);
    const [finish, setFinish] = useState(false);
    const changeTime = (data) => {
        let time = data * 60;
        setCounter(time)
    }
    const startTimer = () => {
        const {setTimer} = props;
        setTimer(counter);
        counter !== 0 && setStart(true);
    }
    const pause = () => {
        const {pauseTimer} = props;
        pauseTimer(counter);
        setStart(false);
    }
    const play = () => {
        setStart(true);
    }
    const resetTimer = () => {
        const {resetTimer} = props;
        setStart(false);
        setFinish(false);
        resetTimer(0);
        setCounter(0);
    }
    const changeSpeed = (data) => {
        const {setSpeed} = props;
        let speed = Number(data.target.value);
        setSpeed(speed);
    }
    useEffect(() => {
        let timer;
        if (counter > 0 && start === true) {
            timer = setTimeout(() => setCounter(t => t - 1), 1000/props.speed);
        }
        if(counter <= 10 && start === true) setFinish(true)
        else setFinish(false)
        return () => {
            clearTimeout(timer);
            const {setTimer,setSpeed} = props;
            if (counter === 1) {
                setStart(false);
                setFinish(false);
                setTimer(0);
                setSpeed(1);
            }
        };
    }, [counter, start]);
    const color = classnames({
        'timer__description': true,
        'timer__time-finished': finish
    })
    return (
        <div className="App">
            <div className="timer">
                <div className="timer__title">
                    <span>countdown:</span>
                    <Input
                        type={!start ? 'start' : 'reset'}
                        onChange={(data) => changeTime(data)}/>
                    <Button
                        title={!start ? 'start' : 'reset'}
                        type={!start ? 'start' : 'reset'}
                        onClick={!start ? () => startTimer() : () => resetTimer()}/>
                </div>
                <div className={color}>
                    <span className="timer__description-time">{format(counter)}</span>
                    {
                        (counter !== 0 && !start) &&
                        <FaPlayCircle
                            className="timer__icon"
                            color="green" size="45px"
                            onClick={() => play()}
                        />
                    }
                    {start &&
                    <FaPauseCircle
                        className="timer__icon"
                        color="green" size="45px"
                        onClick={() => pause()}/>}
                </div>
                {start &&
                <div className="timer__speed">
                    <TimerSpeed changeSpeed={(data) => changeSpeed(data)} label="1X"/>
                </div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    timer: state.timer.timer,
    speed: state.timer.speed
})

export default connect(
    mapStateToProps,
    timerActions
)(Timer);