import {useAuth} from '../../hooks/useAuth'
import {usePosts} from '../../hooks/usePosts'
import PostSearchForm from '../../forms/PostSearchForm/PostSearchForm'
import PostListItem from '../../components/PostListItem/PostListItem'
import './PostSearchPage.css'
import React from 'react'
import opinodromo from "../../assets/opinodromoText2.svg"

const PostSearchPage = () => {
    const {useAuthUser} = useAuth()
    const {posts, setSeachParams, likePostById, deletePostId, loading} = usePosts()

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
                                likePostById={likePostById}
                                deletePostId={deletePostId}
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