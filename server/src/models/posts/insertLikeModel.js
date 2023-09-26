const getDb = require('../../db/getDb');


const { likeAlreadyExistsError} = require ('../../services/errorService');

const insertLikeModel = async (postId, userId) => {
    let connection;

    try { 
        connection = await getDb();
        const isDislikeExists = await connection.query(
            `SELECT id FROM dislikes WHERE postId = ? AND userId = ?`,
            [postId, userId],
        )
        if (isDislikeExists[0].length > 0) {
            await connection.query(
                `DELETE FROM dislikes WHERE postId = ? AND userId = ?`,
                [postId, userId],
                )
            await connection.query(
                `INSERT INTO likes (postId, userId) VALUES (?, ?)`,
                [postId, userId]
            );
        } else {
            likeAlreadyExistsError()
        }

    } finally {
        if (connection) connection.release()
    }
}

module.exports = insertLikeModel;