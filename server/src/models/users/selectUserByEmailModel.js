const getDb = require('../../db/getDb');
const { invalidCredentialsError } = require('../../services/errorService');

const selectUserByEmailModel = async (email) => {
    let conexion;

    try {
        conexion = await getDb();

        const [users] = await conexion.query(
            `SELECT id, password FROM users WHERE email = ?`,
            [email]
        );

        if (users.length === 0) {
            invalidCredentialsError();
        }

        return users[0];
        
    } finally {
        if (conexion) conexion.release();
    }
};
module.exports = selectUserByEmailModel;
