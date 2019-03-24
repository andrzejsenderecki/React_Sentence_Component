import React from 'react';
import './Paragraph.css';
import PropTypes from 'prop-types';

const Paragraph = (props) => {
    return(
        <>
            {props.text ? (
                <p className='text'>{props.text}</p>
            ) : (
                <p className='text'>{props.variant}</p>
            )}   
        </>
    )
}

Paragraph.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string),
    variant: PropTypes.string
}

export default Paragraph;