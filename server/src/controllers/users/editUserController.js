const selectUserByIdModel = require('../../models/users/selectUserByIdModel');
const updateUserModel = require('../../models/users/updateUserModel');
const { missingFieldsError } = require('../../services/errorService');
const bcrypt = require('bcrypt');

const editUserController = async (req, res, next) => {
    try {
        if (!req.body.username || !req.body.email || !req.body.password) {
            missingFieldsError();
        }

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
