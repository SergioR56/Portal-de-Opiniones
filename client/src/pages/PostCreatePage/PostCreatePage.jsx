import { useAuth } from '../../hooks/useAuth';


import { Navigate } from 'react-router-dom';

import PostCreateForm from '../../forms/PostCreateForm/PostCreateForm';

const PostCreatePage = () => {
  const { authUser } = useAuth();

  if (!authUser) return <Navigate to='/' />

  return (
    <main>
      <PostCreateForm />
    </main>
  );
};

export default PostCreatePage;
