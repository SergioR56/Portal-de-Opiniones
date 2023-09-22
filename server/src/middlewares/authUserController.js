const jwt = require('jsonwebtoken');
const {
    notAuthenticatedError,
    invalidTokenError,
} = require('../services/errorService');

const authUserController = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            notAuthenticatedError;
        }

        let userInfo;
        try {
            userInfo = jwt.verify(authorization, process.env.SECRET);

            req.user = userInfo;
            req.userId = userInfo.id;

            next();
        } catch (err) {
            console.error(err);
            invalidTokenError();
        }
    } catch (err) {
        next(err);
    }
};

module.exports = authUserController;
