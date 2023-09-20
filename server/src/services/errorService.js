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
    invalidTokenError() {
    throw {
        httpStatus: 401,
        code: 'INVALID_TOKEN_ERROR',
        message: 'Token is invalid',
    };
    },
    likeAlreadyExistsError() {
    throw {
        httpStatus: 409,
        code: 'LIKE_ALREADY_EXISTS',
        message: 'Can not give one more like once you gived',
    };
    },
    notAuthenticatedError() {
    throw {
        httpStatus: 401,
        code: 'NOT_AUTHENTICATED_ERROR',
        message: 'You are not logged in',
    };
    },
    notFoundError() {
    throw {
        httpStatus: 404,
        code: 'RESOURCE_NOT_FOUND',
        message: 'Resource not exists',
    };
    },
    saveFileError() {
        throw {
            httpStatus: 500,
            code: 'FILE_SAVE_FAILED',
            message: 'Save file error',
        };
    },
    unauthorizedUserError() {
    throw {
        httpStatus: 403,
        code: 'UNAUTHORIZED',
        message: 'User is not authorized to do this',
    };
    },
    userAlreadyRegisteredError() {
    throw {
        httpStatus: 409,
        code: 'USER_ALREADY_REGISTERED',
        message: 'Username already registered',
        };
    },
    
};