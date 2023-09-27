const getDb = require('../../db/getDb');

const modifyUserModel = async (userName, userId) => {
    let connection;

    try {
        connection = await getDb();

        await connection.query('UPDATE users SET userName = ? WHERE id = ?',[
            userName,
            userId,
        ]);
    } finally {
        if (connection) connection.release()
    }
};

module.exports = modifyUserModel;