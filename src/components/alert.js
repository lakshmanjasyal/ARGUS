import React from 'react';
import PropTypes from 'prop-types';
import './alert.css'; // Make sure to create a CSS file for styling

const Alert = ({ message, type }) => {
    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
};

export default Alert;