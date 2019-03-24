import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    return(
        <button type='button' className='btn' onClick={props.changeOption} >{props.text}</button>
    )
}

Button.propTypes = {
    changeOption: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Button;