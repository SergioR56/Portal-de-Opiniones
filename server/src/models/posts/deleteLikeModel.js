const getDb = require('../../db/getDb');
const { notFoundError } = require('../../services/errorService');


const deleteLikeModel = async (postId, userId) => {
    let connection;

    try {
        connection = await getDb();

        const [likes] = await connection.query(
            `SELECT id FROM likes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );

        if (likes.length < 1) {
            notFoundError();
        }

        await connection.query(
            `DELETE FROM likes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteLikeModel;
