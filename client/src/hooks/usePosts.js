import { useEffect, useState } from "react";
import { listPostService } from "../services/postService";
import { useSearchParams } from "react-router-dom";

export const usePosts = () => {
    const [posts, setPosts] = useState();
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);

                const body = await listPostService(searchParams);

                setPosts(body.data.posts)
                } catch (err) {
                    alert(err.message);
                } finally {
                    setLoading(false);
                }
        }
        fetchPosts()
    }, [searchParams])
    return {
        posts,
        setSearchParams,
        loading,
    }
}