import '../../components/PostSearch/PostSearch.css';
import { usePosts } from '../../hooks/usePosts';
import PostListItem from '../PostListItem/PostListItem';

const PostSearch = () => {
    const { posts } = usePosts()
    return (
        <main>
            <h2>Ultimas Opiniones</h2>
            <ul className='post-list'>
                {posts?.length > 0 ? (
                    posts.map((post) => {
                        return <PostListItem key={post.id} post={post.text} />
            })
                ):(
                    <li className='no-posts'>
                        No existen posts!
                    </li>
                )
            }
            </ul>
        </main>
    );
};

export default PostSearch;