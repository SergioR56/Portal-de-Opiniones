const joi = require('joi');

const joiErrorMessages = require('../joiErrorMessages');

const loginUserSchema = joi.object({
    email: joi.string().email().required().messages(joiErrorMessages),
    password: joi.string().required().messages(joiErrorMessages),
});

module.exports = loginUserSchema;
