const insertPostModel = require("../../models/posts/insertPostModel.js")
const newPostSchema = require("../../schemas/newPostSchema.js")
const validateSchema = require('../../utils/validateSchema.js');

const newPostController = async (req, res, next) => {
    try{
    const {text} = req.body;
        await validateSchema(newPostSchema), {
            ...req.body,
            // ...req.files
        };

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

}

module.exports = newPostController;