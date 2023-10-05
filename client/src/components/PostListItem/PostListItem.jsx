import PropTypes from 'prop-types';
import {postPropTypes, userPropTypes} from "../../utils/customPropTypes"
import PostHeader from './PostHeader/PostHeader';
import PostBody from './PostBody/PostBody';
import PostFooter from './PostFooter/PostFooter';

const PostListItem = ({authUser, post}) => {
    return (
        <li className='post'>
            <PostHeader
                username={post.username}
                createdAt={post.createdAt}
            />
            <PostBody text={post.text} image={post.image}/>
            <PostFooter
                authUser={authUser}
                postId={post.id}
                likes={post.likes}
                likedByMe={post.likedByMe}
            />
        </li>
    )
}

PostListItem.propTypes = {
    authUser: userPropTypes,
    postId: PropTypes.number.isRequired,
    post: postPropTypes.isRequired,
    likes: PropTypes.number.isRequired,
    likedByMe: PropTypes.bool.isRequired,
}

export default PostListItem