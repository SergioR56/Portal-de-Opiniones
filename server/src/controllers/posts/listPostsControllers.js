const selectAllPostsModel = require('../../models/posts/selectAllPostsModel');

const listPostsController = async (req, res, next) => {
    try {
        const { keyword } = req.query;

        const posts = await selectAllPostsModel(keyword, req.user?.id);

        res.send({
            status: 'ok',
            data: {
                posts,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listPostsController;
