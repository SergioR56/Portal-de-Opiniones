const getDb = require('../../db/getDb');
const { notFoundError } = require('../../services/errorService');

const deleteDislikeModel = async (postId, userId) => {
    let connection;

    try {
        connection = await getDb();

        const [dislikes] = await connection.query(
            `SELECT id FROM dislikes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );

        if (dislikes.length < 1) {
            notFoundError();
        }

        await connection.query(
            `DELETE FROM dislikes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteDislikeModel;
