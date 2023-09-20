module.exports = {
    missingFieldsError() {
        throw {
            httpStatus: 400,
            code: 'MISSING_FIELDS_ERROR',
            message: 'Missing fields',
        };
    },
    deleteFileError() {
        throw {
            httpStatus: 500,
            code: 'FILE_DELETE_FAILED',
            message: 'Delete file failed',
        };
    },
    emailAlreadyRegisteredError() {
        throw {
            httpStatus: 409,
            code: 'EMAIL_ALREADY_REGISTERED',
            message: 'This email address already exists',
        };
    },
    invalidCredentialsError() {
        throw {
            httpStatus: 401,
            code: 'INVALID_CREDENTIALS_ERROR',
            message: 'Invalid credentials',
        };
    },
    
};