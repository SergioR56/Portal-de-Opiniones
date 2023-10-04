const selectUserByIdModel = require('../../models/users/selectUserByIdModel');
const updateUserModel = require('../../models/users/updateUserModel');
const validateSchema = require('../../utils/validateSchema');
const updateUserSchema = require('../../schemas/users/updateUserSchema')
const bcrypt = require('bcrypt');

const editUserController = async (req, res, next) => {
    try {
        await validateSchema(updateUserSchema, req.body);

        const user = await selectUserByIdModel(req.userId);

        req.body.username = req.body.username || user.username;
        req.body.email = req.body.email || user.email;
        req.body.password = req.body.password || user.password;

        if (req.body.username !== user.username) {
            user.username = req.body.username;
        }
        if (req.body.email !== user.email) {
            user.email = req.body.email;
        }
        if (req.body.password !== user.password) {
            user.password = req.body.password;
            user.password = await bcrypt.hash(user.password, 10);
        }

        await updateUserModel(user);

        res.send({
            status: 'ok',
            message: 'Usuario actualizado correctamente',
        });
    } catch (err) {
        next(err);
    }
};
module.exports = editUserController;
