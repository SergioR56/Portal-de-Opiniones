const deleteDislikeModel = require('../../models/posts/deleteDislikeModel');

const deleteDislikeController = async (req, res, next) => {
    try {
        const { postId } = req.params;

        await deleteDislikeModel(postId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Dislike eliminado ',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteDislikeController;
