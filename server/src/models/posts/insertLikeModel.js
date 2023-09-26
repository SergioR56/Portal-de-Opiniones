const getDb = require('../../db/getDb');


const { likeAlreadyExistsError} = require ('../../services/errorService');

const insertLikeModel = async (postId, userId) => {
    let connection;

    try { 
        connection = await getDb();

        const [likes] = await connection.query(
            `SELECT id FROM likes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        )

        if (likes.length > 0) {
            likeAlreadyExistsError()
        }

        await connection.query(
            `INSERT INTO likes (postId, userId) VALUES (?, ?)`,
            [postId, userId]
        );
    } finally {
        if (connection) connection.release()
    }
}

module.exports = insertLikeModel;