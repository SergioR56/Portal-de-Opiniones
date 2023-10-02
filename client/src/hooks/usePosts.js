import { useEffect, useState } from "react";
import { listPostService } from "../services/postService";

export const usePosts = () => {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);

                const body = await listPostService();

                setPosts(body.data.posts)
                } catch (err) {
                    alert(err.message);
                } finally {
                    setLoading(false);
                }
        }
        fetchPosts()
    }, [])
    return {
        posts,
        loading,
    }
}