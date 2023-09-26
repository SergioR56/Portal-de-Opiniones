// Importamos los modelos.
const allPostModel = require('../../models/posts/allPostsModel');

// Función controladora final que selecciona todos los posts.
const listPostsController = async (req, res, next) => {
    try {
        // Llamar al modelo sin pasar una palabra clave.
        const posts = await allPostModel('', req.user?.id);

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


// // Importamos los modelos.
// const allPostModel = require('../../models/posts/allPostsModel');

// // Función controladora final que selecciona todos los post.
// const listPostController = async (req, res, next) => {
//     try {
//         // Obtenemos el query param correspondiente.
//         const { keyword } = req.query;

//         const posts = await allPostModel(keyword, req.user?.id);

//         res.send({
//             status: 'ok',
//             data: {
//                 posts,
                                
//             },
//         });
//     } catch (err) {
//         next(err);
//     }
// };

// module.exports = listPostController;
