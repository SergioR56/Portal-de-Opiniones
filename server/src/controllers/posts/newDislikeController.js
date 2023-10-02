const insertDislikeModel = require('../../models/posts/insertDislikeModel');

const newDislikeController = async (req, res, next) => {
    try {
        const { postId } = req.params;

        await insertDislikeModel(postId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Dislike agregado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newDislikeController;
