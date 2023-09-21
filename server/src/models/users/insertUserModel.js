const bcrypt = require('bcrypt');
const getDb = require('../../db/getDb');

const {
    emailAlreadyRegisteredError,
    userAlreadyRegisteredError,
} = require('../../services/errorService');

const insertUserModel = async (username, email, password) => {
    let conexion;

    try {
        conexion = await getDb();

        let [users] = await conexion.query(
            `SELECT id FROM users WHERE email = ?`,
            [email]
        );

        if (users.length > 0) {
            emailAlreadyRegisteredError();
        }

        [users] = await conexion.query(
            `SELECT id FROM users WHERE username = ?`,
            [username]
        );

        if (users.length > 0) {
            userAlreadyRegisteredError();
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await conexion.query(
            `INSERT INTO users (email, username, password) VALUES (?, ?, ?)`,
            [email, username, hashedPassword]
        );
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = insertUserModel;
