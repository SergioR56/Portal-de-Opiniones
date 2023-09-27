const getDb = require('../../db/getDb');
const { notFoundError } = require('../services/errorService');

const selectUserByIdModel = async (userId) => {
    let conexion;

    try {
        conexion = await getDb();

        const [users] = await conexion.query(
            `SELECT id, userName FROM users WHERE id = ?`,
            [userId]
        );

            if (users.length < 1) {
                notFoundError('user')
            }
        return users[0];
        
    } finally {
        if (conexion) conexion.release();
    }
};
module.exports = selectUserByIdModel;
