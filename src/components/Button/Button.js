import React from "react";
import PropType from 'prop-types';
import './styles.scss';

const Button = (props) => {
    const {title, type, onClick} = props;
    return(
        <button className="button" onClick={onClick}>{title}</button>
    )
}

Button.propTypes = {
    title: PropType.string,
    type: PropType.string,
    onClick: PropType.func
}

export default Button;