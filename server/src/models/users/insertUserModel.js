let connnection;
const bcrypt = require('bcrypt');

const getDb = require('../../db/getDb');

const{
    emailAlreadyRegisteredError,
    userAlreadyRegisteredError,
} = require('../../services/errorService');

try {
    connection = await getDb();

    let [users] = await connection.query(
        'SELECT id FROM users WHERE email = ?',
        [email]
    );

    if (users.length > 0) {
        emailAlreadyRegisteredError();     
    }

        [users] = await connection.query(
        'SELECT id FROM users WHERE username = ?',
        [username]
    );

    if (users.length > 0) {
        userAlreadyRegisteredError();
    }

const hashedPassword = await bcrypt.hash(password, 10);

await connection.query(
    'INSERT INTO users (email, username, password) VALUES(?, ?, ?)',
    [username, email, hashedPassword]
);

} finally {
    if (connection) connnection.release();
};

module.exports = insertUserModel;