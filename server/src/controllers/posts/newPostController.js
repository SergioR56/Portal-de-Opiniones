const insertPostModel = require('../../models/posts/insertPostModel');
const { missingFieldsError } = require('../../services/errorService');

const newPostController = async (req, res, next) => {
    try {
        const { text } = req.body;

        if (!text) {
            missingFieldsError();
        }

        const postId = await insertPostModel(text, req.user.id);

        res.send({
            status: 'ok',
            data: {
                post: {
                    id: postId,
                    userId: req.user.id,
                    text,
                    createdAt: new Date(),
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newPostController;
