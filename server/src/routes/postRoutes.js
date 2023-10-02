const express = require('express');
const router = express.Router();

const authUserController = require('../middlewares/authUserController');
const authUserOptionalController = require('../middlewares/authUserOptionalController');

const {
    newPostController,
    newLikeController,
    deleteLikeController,
    newDislikeController,
    deleteDislikeController,
    listPostsController,
} = require('../controllers/posts');

//Insertar comentario
router.post('/posts', authUserController, newPostController);

//Insertar like
router.post('/posts/:postId/likes', authUserController, newLikeController);

//Eliminar like
router.delete('/posts/:postId/likes', authUserController, deleteLikeController);

//Insertar Dislikes
router.post('/posts/:postId/dislikes', authUserController, newDislikeController);

//Eliminar dislikes
router.delete('/posts/:postId/dislikes', authUserController, deleteDislikeController);

//Listado de posts.
router.get('/posts', authUserOptionalController, listPostsController);

module.exports = router;






