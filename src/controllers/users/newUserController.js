const insertUserModel = require("../../models/insertUserModel");

const { missingFieldsError } = require('../../services/errorService');

const newUserController = async (req, res, next) => {
    try {
        const { username, email, password } =req.body;

        if (!username || !email || !password) {
            missingFieldsError();
        }

        await insertUserModel(username, email, password)

        res.send({
            status: 'ok',
            message: 'User registered successfully'
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newUserController;