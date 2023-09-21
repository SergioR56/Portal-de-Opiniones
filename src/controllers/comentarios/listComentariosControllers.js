// Importamos los modelos.
const allComentarioModel = require('../../models/comentarios/allComentariosModel');

// Función controladora final que selecciona todos los tweets.
const listComentarioController = async (req, res, next) => {
    try {
        // Obtenemos el query param correspondiente.
        const { keyword } = req.query;

        const comentarios = await allComentarioModel(keyword, req.user?.id);

        res.send({
            status: 'ok',
            data: {
                comentarios,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listComentarioController;
