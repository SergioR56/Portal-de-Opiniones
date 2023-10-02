const getDb = require('../db/getDb');
const { notFoundError } = require('../services/errorService');

const postExistsController = async (req, res, next) => {
    let conexion;

    try {
        conexion = await getDb();

        const { postId } = req.params;

        const [posts] = await conexion.query(
            `SELECT id FROM posts WHERE id=?`,
            [postId]
        );

        if (posts.length < 1) {
            notFoundError('Post');
        }
        next();
    } catch (err) {
        next(err);
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = postExistsController;
