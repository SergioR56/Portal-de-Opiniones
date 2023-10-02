const getDb = require('../../db/getDb');

const updateUserModel = async (user) => {
    let conexion;

    try {
        conexion = await getDb();

        await conexion.query(`UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`, [
            user.username,
            user.email,
            user.password,
            user.id,
        ]);
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = updateUserModel;
