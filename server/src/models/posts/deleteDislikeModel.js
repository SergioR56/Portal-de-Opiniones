const getDb = require('../../db/getDb');
const { notFoundError } = require('../../services/errorService');

const deleteDislikeModel = async (postId, userId) => {
    let conexion;

    try {
        conexion = await getDb();

        const [dislikes] = await conexion.query(
            `SELECT id FROM dislikes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );

        if (dislikes.length < 1) {
            notFoundError('dislike');
        }

        await conexion.query(
            `DELETE FROM dislikes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = deleteDislikeModel;
