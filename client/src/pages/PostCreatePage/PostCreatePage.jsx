import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import PostCreateForm from '../../forms/PostCreateForm/postCreateForm'
import { usePosts } from '../../hooks/usePosts';

const PostCreatePage = () => {
    const { authUser } = useAuth();
    const { addPost } = usePosts();

    if (!authUser) return <Navigate to="/"/>
    return (
        <main>
            <PostCreateForm addPost={addPost} />
        </main>
    )
}

export default PostCreatePage;