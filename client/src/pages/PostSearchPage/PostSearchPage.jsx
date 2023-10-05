import {useAuth} from '../../hooks/useAuth'
import {usePosts} from '../../hooks/usePosts'
import PostSearchForm from '../../forms/PostSearchForm/PostSearchForm'
import PostListItem from '../../components/PostListItem/PostListItem'
import './PostSearchPage.css'

const PostSearchPage = () => {
    const {useAuthUser} = useAuth()
    const {posts, setSeachParams, loading} = usePosts()

    return (
        <main>
            <PostSearchForm
                setSeachParams={setSeachParams}
                loading={loading}
            />

            <ul className='post-list'>
                {posts?.length > 0 ? (
                    posts.map((post) => {
                        return (
                            <PostListItem
                                key={post.id}
                                useAuthUser={useAuthUser}
                                post={post}
                            />
                        );
                    })
                ) :(
                    <li className='no-posts'>
                        No se encontraron Posts
                    </li>
                )}
                    
            </ul>
        </main>
    )
}

export default PostSearchPage