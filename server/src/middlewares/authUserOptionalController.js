const jwt = require('jsonwebtoken');
const { invalidTokenError } = require('../services/errorService');

const authUserOptionalController = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (authorization) {
            let userInfo;
            try {
                userInfo = jwt.verify(authorization, process.env.SECRET);

                req.user = userInfo;
            } catch (err) {
                console.error(err);
                invalidTokenError();
            }
        }
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authUserOptionalController;
