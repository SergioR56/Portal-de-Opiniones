const deletePostModel = require("../../models/posts/deletePostModel");

const deletePostController = async (req, res, next) => {
    try {
        const { postId } = req.params;

        await deletePostModel(postId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Post eliminado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deletePostController;
