const bcrypt = require('bcrypt');
const getDb = require('../../db/getDb');

const insertUserModel = async (username, email, password) => {
    let conexion;

    try {
        conexion = await getDb();

        let [users] = await conexion.query(
            `SELECT id FROM users WHERE email = ?`,
            [email]
        );

        if (users.length > 0) {
            const err = new Error('Ya existe un usuario con ese email');
            err.httpStatus = 409;
            throw err;
        }

        [users] = await conexion.query(
            `SELECT id FROM users WHERE username = ?`,
            [username]
        );

        if (users.length > 0) {
            const err = new Error('Ya existe un usuario con ese nombre');
            err.httpStatus = 409;
            throw err;
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

// let connnection;
// const bcrypt = require('bcrypt');
// try {
//     connection = await getDb();

//     let [users] = await connection.query(
//         'SELECT id FROM users WHERE email = ?',
//         [email]
//     );

//     if (users.length > 0) {
//         const err = new Error ('Another user already exists with this email address');
//         err.httpStatus = 409;
//         throw err;
//     }

//         [users] = await connection.query(
//         'SELECT id FROM users WHERE username = ?',
//         [username]
//     );

//     if (users.length > 0) {
//         const err = new Error ('Another user already exists with this username');
//         err.httpStatus = 409;
//         throw err;
//     }

// const hashedPassword = await bcrypt.hash(password, 10);

// await connection.query(
//     'INSERT INTO users (email, username, password) VALUES(?, ?, ?)',
//     [username, email, hashedPassword]
// );

// } finally {
//     if (connection) connnection.release();
// };

// module.exports = insertUserModel;