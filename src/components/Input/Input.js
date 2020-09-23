import React from "react";
import PropType from 'prop-types';
import './styles.scss';

const Input = (props) => {
    const {value, onChange, type} = props;
    return (
        <input
            className="input-field"
            type={type === 'start' ? 'number' : undefined}
            min="0"
            onChange={type === 'start' ?
                (e) => onChange(e.target.value)
                : undefined
            }
            value={type === 'reset' ? '' : value}
            placeholder="(Min)"/>
    )
}

Input.propTypes = {
    value: PropType.number,
    onChange: PropType.func,
}

export default Input;