const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const selectUserByEmailModel = require('../../models/users/selectUserByEmailModel');

const validateSchema = require('../../utils/validateSchema');


const loginUserSchema = require('../../schemas/users/loginUserSchema');

const { invalidCredentialsError } = require('../../services/errorService');

const loginUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        await validateSchema(loginUserSchema, req.body);

        const user = await selectUserByEmailModel(email);
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            invalidCredentialsError();
        }

        const tokenInfo = {
            id: user.id,
        };
        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '7d',
        });

        res.send({
            status: 'ok',
            data: { token },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUserController;
