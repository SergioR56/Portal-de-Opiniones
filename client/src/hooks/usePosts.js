import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { dislikePostService, likePostService, listPostService } from '../services/postService';

export const usePosts = () => {
  const [posts, setPosts] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const body = await listPostService(searchParams);

        setPosts(body.data.posts);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [searchParams]);


  //Agregar o eliminar like
  const likePostById = async (postId, method) => {
    await likePostService(postId, method);
         const body = await listPostService(searchParams);
         setPosts(body.data.posts);
  };

  //Agregar o eliminar dislike
  const dislikePostById = async (postId, method) => {

   await dislikePostService(postId, method);
        const body = await listPostService(searchParams);
        setPosts(body.data.posts);
  };

  const deletePostById = (postId) => {
    const newPosts = posts.filter((post) => post.id !== postId);

    setPosts(newPosts);
  };

  return {
    posts,
    setSearchParams,
    likePostById,
    dislikePostById,
    deletePostById,
    loading,
  };
};
