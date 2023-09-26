const insertLikeModel = require('../../models/posts/insertLikeModel');

const newLikeController = async (req, res, next) => {
    try {
        const { postId } = req.params;

        await insertLikeModel(postId, req.user.id);

        res.send({
            status: 'ok',
            message: 'like added successfully',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newLikeController;