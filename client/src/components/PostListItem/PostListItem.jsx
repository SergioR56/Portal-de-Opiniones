import { PropTypes } from 'prop-types';
import { postPropTypes, userPropTypes } from '../../utils/customPropTypes';

import PostHeader from './PostHeader/PostHeader';
import PostBody from './PostBody/PostBody';
import PostFooter from './PostFooter/PostFooter';

import './PostListItem.css';

const PostListItem = ({
  authUser,
  post,
  likePostById,
  dislikePostById,
  deletePostById,
}) => {
  return (
    <li className='post'>
      <PostHeader username={post.username} createdAt={post.createdAt} />
      <div className='post-content'>
        <PostBody text={post.text} />
        <PostFooter
          authUser={authUser}
          postId={post.id}
          owner={post.owner}
          likes={post.likes}
          likedByMe={post.likedByMe}
          dislikes={post.dislikes}
          dislikedByMe={post.dislikedByMe}
          likePostById={likePostById}
          dislikePostById={dislikePostById}
          deletePostById={deletePostById}
        />
      </div>
    </li>
  );
};

PostListItem.propTypes = {
  authUser: userPropTypes,
  post: postPropTypes,
  likePostById: PropTypes.func.isRequired,
  dislikePostById: PropTypes.func.isRequired,
  deletePostById: PropTypes.func.isRequired,
};

export default PostListItem;
