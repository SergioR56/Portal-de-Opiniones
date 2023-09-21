const insertComentarioModel = require("../../models/comentarios/insertComentarioModel.js")
const newComentarioSchema = require("../../schemas/newComentarioSchema.js")
const validateSchema = require('../../utils/validateSchema');

const newComentarioController = async (req, res, next) => {
    try{
    const {text} = req.body;
        await validateSchema(newComentarioSchema), {
            ...req.body,
            // ...req.files
        };

        const comentarioId = await insertComentarioModel(text, req.user.id);

        res.send({
            status: 'ok',
            data: {
                comentario: {
                    id: comentarioId,
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

module.exports = newComentarioController;