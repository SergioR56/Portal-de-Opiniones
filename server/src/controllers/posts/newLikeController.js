const insertLikeModel = require('../../models/posts/insertLikeModel');

const newLikeController = async (req, res, next) => {
    try {
        const { postId } = req.params;

        await insertLikeModel(postId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Like agregado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newLikeController;
