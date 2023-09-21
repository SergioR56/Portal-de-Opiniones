// Importamos los modelos.
const allPostModel = require('../../models/Posts/allPostsModel');

// Función controladora final que selecciona todos los post.
const listPostController = async (req, res, next) => {
    try {
        // Obtenemos el query param correspondiente.
        const { keyword } = req.query;

        const posts = await allPostModel(keyword, req.user?.id);

        res.send({
            status: 'ok',
            data: {
                posts,
                username,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listPostController;
