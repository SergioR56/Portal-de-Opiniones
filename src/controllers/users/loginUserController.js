const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const selectUserByEmail = require("../../models/users/selectUserByEmail");

const { missingFieldsError } = require("../../services/errorService");

const loginUserController = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            missingFieldsError();
        }

        const user = await selectUserByEmail(email);
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            // eslint-disable-next-line no-undef
            invalidCredentialsError()
        }

        const tokenInfo = {
            id: user.id,
            role: user.role,
        }

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
        next(err)
    }
}

module.exports = loginUserController;