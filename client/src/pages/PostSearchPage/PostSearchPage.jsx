import { usePosts } from '../../hooks/usePosts';
import { useAuth } from '../../hooks/useAuth';

import PostListItem from '../../components/PostListItem/PostListItem';

import './PostSearchPage.css';

const PostSearchPage = () => {
  const { authUser } = useAuth();
  const {
    posts,
    likePostById,
    dislikePostById,
    deletePostById,
  } = usePosts();

  return (
    <main>

      <ul className='post-list'>
        {posts?.length > 0 ? (
          posts.map((post) => {
            return (
              <PostListItem
                key={post.id}
                authUser={authUser}
                post={post}
                likePostById={likePostById}
                dislikePostById={dislikePostById}
                deletePostById={deletePostById}
              />
            );
          })
        ) : (
          <li className='no-results'>No se encontraron resultados!</li>
        )}
      </ul>
    </main>
  );
};
export default PostSearchPage;
