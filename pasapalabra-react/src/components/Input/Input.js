import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ 
    customInputType,
    customInputClassName,
    customInputPlaceholder, 
    customInputValue, 
    customInputfunctionality 
}) => {
    return (
        <input 
            type={customInputType}
            className={customInputClassName}
            placeholder={customInputPlaceholder}
            value={customInputValue}
            onChange={customInputfunctionality}
            maxLength="22"
            minLength="1"
        >
        </input>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default Input;