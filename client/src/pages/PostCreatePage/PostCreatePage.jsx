import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import PostCreateForm from '../../forms/PostCreateForm/postCreateForm'

const PostCreatePage = () => {
    const {authUser}= useAuth()

    if (!authUser) return <Navigate to="/"/>
    return (
        <main>
            <h2>Que Opinas?</h2>
            <PostCreateForm/>
        </main>
    )
}

export default PostCreatePage