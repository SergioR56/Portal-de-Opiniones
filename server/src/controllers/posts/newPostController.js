const insertPostModel = require('../../models/posts/insertPostModel');

const validateSchema = require('../../utils/validateSchema');
const newPostSchema = require('../../schemas/posts/newPostSchema');

const newPostController = async (req, res, next) => {
    try {
        const { text } = req.body;

        await validateSchema(newPostSchema, {
            ...req.body,
        });

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
