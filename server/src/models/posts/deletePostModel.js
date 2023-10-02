const getDb = require('../../db/getDb');
const { unauthorizedUserError } = require('../../services/errorService');

const deletePostModel = async (postId, userId) => {
    let conexion;

    try {
        conexion = await getDb();

        const [posts] = await conexion.query(
            `SELECT userId FROM posts WHERE id=?`,
            [postId]
        );

        if (posts[0].userId !== userId) {
            unauthorizedUserError();
        }
        await conexion.query(`DELETE FROM likes WHERE postId=?`, [postId]);

        await conexion.query(`DELETE FROM dislikes WHERE postId=?`, [postId]);

        await conexion.query(`DELETE FROM posts WHERE id=?`, [postId]);
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = deletePostModel;
