const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const selectUserByEmailModel = require('../../models/users/selectUserByEmailModel');
const {
    missingFieldsError,
    invalidCredentialsError,
} = require('../../services/errorService');

const loginUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            missingFieldsError();
        }

        const user = await selectUserByEmailModel(email);
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            invalidCredentialsError();
        }

        const tokenInfo = {
            id: user.id,
            role: user.role,
        };

        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '10h',
        });

        res.send({
            status: 'ok',
            data: {
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUserController;
