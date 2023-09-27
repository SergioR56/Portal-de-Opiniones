const getDb = require('../../db/getDb');

const { dislikeAlreadyExistsError } = require('../../services/errorService');

const insertDislikeModel = async (postId, userId) => {
    let connection;
    
    try {
    connection = await getDb();
    const isLikeExists = await connection.query(
        `SELECT id FROM likes WHERE postId = ? AND userId = ?`,
        [postId, userId]
    );
    if (isLikeExists[0].length > 0) {
        await connection.query(
            `DELETE FROM likes WHERE postId = ? AND userId = ?`,
            [postId, userId]
        );
     await connection.query(
         `INSERT INTO dislikes (postId, userId) VALUES (?, ?)`,
         [postId, userId]
     );
    } else {
        dislikeAlreadyExistsError()
    }

} finally {
    if (connection) connection.release();
}
};

module.exports = insertDislikeModel;
