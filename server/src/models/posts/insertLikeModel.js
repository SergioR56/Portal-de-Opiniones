const getDb = require('../../db/getDb');

const { likeAlreadyExistsError } = require('../../services/errorService');

const insertLikeModel = async (postId, userId) => {
    let conexion;

    try {
        conexion = await getDb();

        const [likes] = await conexion.query(
            `SELECT id FROM likes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );

        if (likes.length > 0) {
            likeAlreadyExistsError();
        }

        await conexion.query(
            `DELETE FROM dislikes WHERE postId = ? AND userId = ?`,
            [postId, userId]
            );
        await conexion.query(
            `INSERT INTO likes (postId, userId) VALUES (?, ?)`,
            [postId, userId]
            );
        
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = insertLikeModel;
