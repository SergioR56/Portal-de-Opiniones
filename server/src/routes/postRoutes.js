const express = require('express');
const router = express.Router();

const {authUserController, 
    authUserOptionalController, 
    postExistsController,
}= require('../middlewares');

const {
    newPostController,
    newLikeController,
    deleteLikeController,
    newDislikeController,
    deleteDislikeController,
    listPostsController,
    deletePostController,
} = require('../controllers/posts');

//Insertar comentario
router.post('/posts', authUserController, newPostController);

//Insertar like
router.post('/posts/:postId/likes', authUserController, postExistsController, newLikeController);

//Eliminar like
router.delete('/posts/:postId/likes', authUserController, postExistsController, deleteLikeController);

//Insertar Dislikes
router.post('/posts/:postId/dislikes', authUserController, postExistsController, newDislikeController);

//Eliminar dislikes
router.delete('/posts/:postId/dislikes', authUserController, postExistsController, deleteDislikeController);

//Listado de posts con filtros.
router.get('/posts', authUserOptionalController, listPostsController);

//Eliminar post
router.delete('/posts/:postId', authUserController, postExistsController, deletePostController);


module.exports = router;






