const getDb = require('../../db/getDb');
const { notFoundError } = require('../../services/errorService');


const deleteLikeModel = async (postId, userId) => {
    let conexion;

    try {
        conexion = await getDb();

        const [likes] = await conexion.query(
            `SELECT id FROM likes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );

        if (likes.length < 1) {
            notFoundError('like');
        }

        await conexion.query(
            `DELETE FROM likes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = deleteLikeModel;
