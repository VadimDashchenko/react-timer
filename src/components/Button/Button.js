import React from "react";
import PropType from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const Button = (props) => {
    const {title, type, onClick} = props;
    const cn = classnames({
        "button": true,
        "button__start": type === 'start',
        "button__reset": type === 'reset',
    })
    return(
        <button className={cn} onClick={onClick}>{title}</button>
    )
}

Button.propTypes = {
    title: PropType.string,
    type: PropType.string,
    onClick: PropType.func
}

export default Button;