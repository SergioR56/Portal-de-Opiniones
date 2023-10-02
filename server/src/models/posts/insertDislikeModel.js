const getDb = require('../../db/getDb');

const { dislikeAlreadyExistsError } = require('../../services/errorService');

const insertDislikeModel = async (postId, userId) => {
    let conexion;

    try {
        conexion = await getDb();

        const [dislikes] = await conexion.query(
            `SELECT id FROM dislikes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );

        if (dislikes.length > 0) { 
            dislikeAlreadyExistsError();
        }
        await conexion.query(
            `DELETE FROM likes WHERE postId = ? AND userId = ?`,
            [postId, userId]
            );
        await conexion.query(
            `INSERT INTO dislikes (postId, userId) VALUES (?, ?)`,
            [postId, userId]
            );
        
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = insertDislikeModel;
