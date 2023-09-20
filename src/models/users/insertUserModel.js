let connnection;
const bcrypt = require('bcrypt');
try {
    connection = await getDb();

    let [users] = await connection.query(
        'SELECT id FROM users WHERE email = ?',
        [email]
    );

    if (users.length > 0) {
        const err = new Error ('Another user already exists with this email address');
        err.httpStatus = 409;
        throw err;
    }

        [users] = await connection.query(
        'SELECT id FROM users WHERE username = ?',
        [username]
    );

    if (users.length > 0) {
        const err = new Error ('Another user already exists with this username');
        err.httpStatus = 409;
        throw err;
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