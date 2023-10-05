import PropTypes from 'prop-types';

export const postPropTypes = PropTypes.shape({
    post: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    username: PropTypes.string.isRequired,
    owner: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    likedByMe: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
});

export const userPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
});
