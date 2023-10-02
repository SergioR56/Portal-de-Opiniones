const deleteLikeModel = require('../../models/posts/deleteLikeModel');

const deleteLikeController = async (req, res, next) => {
    try {
        const { postId } = req.params;

        await deleteLikeModel(postId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Like eliminado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteLikeController;
