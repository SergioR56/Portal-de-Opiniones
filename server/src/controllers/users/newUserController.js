const insertUserModel = require('../../models/users/insertUserModel');

const validateSchema = require('../../utils/validateSchema');

const newUserSchema = require('../../schemas/users/newUserSchema');


const newUserController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        await validateSchema(newUserSchema, req.body);

        await insertUserModel(username, email, password);

        res.send({
            status: 'ok',
            message: 'Usuario creado correctamente',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newUserController;