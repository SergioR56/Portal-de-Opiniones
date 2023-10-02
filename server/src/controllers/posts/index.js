const newPostController = require('./newPostController');
const newLikeController = require('./newLikeController');
const deleteLikeController = require('./deleteLikeController');
const listPostsController = require('./listPostsControllers');
const deleteDislikeController = require('./deleteDislikeController');
const newDislikeController = require('./newDislikeController');
const deletePostController = require('./deletePostController');

module.exports = {
    newPostController,
    newLikeController,
    deleteLikeController,
    newDislikeController,
    deleteDislikeController,
    listPostsController,
    deletePostController
}