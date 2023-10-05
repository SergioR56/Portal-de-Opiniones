import PropTypes from 'prop-types';

import { createContext, useState } from 'react';

export const ErrorContext = createContext(null);

export const ErrorProvider = ({ children }) => {
    const [errMsg, setErrMsg] = useState('');

    return (
        <ErrorContext.Provider value={{ errMsg, setErrMsg }}>
            {children}
        </ErrorContext.Provider>
    );
};

ErrorProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
