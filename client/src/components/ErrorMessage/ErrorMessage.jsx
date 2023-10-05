// Importamos los prop-types.
import PropTypes from 'prop-types';

import { useEffect } from 'react';

import './ErrorMessage.css';

const ErrorMessage = ({ errMsg, setErrMsg }) => {
    useEffect(() => {
        setTimeout(() => {
            setErrMsg('');
        }, 5000);
    }, [errMsg, setErrMsg]);

    return (
        errMsg && (
            <div className="error-message">
                {console.warn(errMsg)}
                <p>{errMsg}</p>
            </div>
        )
    );
};

ErrorMessage.propTypes = {
    errMsg: PropTypes.string.isRequired,
    setErrMsg: PropTypes.func.isRequired,
};

export default ErrorMessage;
