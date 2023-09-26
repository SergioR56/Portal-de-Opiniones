const getDb = require('../../db/getDb');

const { dislikeAlreadyExistsError } = require('../../services/errorService');

const insertDislikeModel = async (postId, userId) => {
    let connection;

    try {
        connection = await getDb();

        const [dislikes] = await connection.query(
            `SELECT id FROM dislikes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );

        if (dislikes.length > 0) {
            dislikeAlreadyExistsError();
        }

        await connection.query(
            `INSERT INTO dislikes (postId, userId) VALUES (?, ?)`,
            [postId, userId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertDislikeModel;
