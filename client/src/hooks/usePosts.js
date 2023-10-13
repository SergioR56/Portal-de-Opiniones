import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { listPostService } from '../services/postService';

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
  const likePostById = (postId) => {
    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        const likedByMe = !post.likedByMe;

      

        const likes = likedByMe ? post.likes + 1 : post.likes - 1;

        return { ...post, likedByMe, likes };
      }
      return post;
    });

    setPosts(newPosts);
  };

  //Agregar o eliminar dislike
  const dislikePostById = (postId) => {
    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        const dislikedByMe = !post.dislikedByMe;

        const dislikes = dislikedByMe ? post.dislikes + 1 : post.dislikes - 1;

        return { ...post, dislikedByMe, dislikes };
      }
      return post;
    });

    setPosts(newPosts);
  };

  //Eliminar post
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
