
import { getToken } from "../utils/getToken";
const baseURL = import.meta.env.VITE_API_URL; 

export const createPostService = async (formData) => {
    const token = getToken();
    const res = await fetch(`${baseURL}/posts`, {
        method: 'post',
        headers: {
        Authorization: token,
        },
        body: formData,
    });
    
    const body = await res.json();
    return body;
};

export const listPostService = async (searchParams) => {
    const token = getToken();
    const res = await fetch(`${baseURL}/posts?${searchParams}`, {
        headers: token ? {Authorization: token} : {},
        });
        const body = await res.json();
        return body;
};


export const likePostService = async (postId, method) => {
    const token = getToken();

    const res = await fetch(`${baseURL}/posts/${postId}/likes`,{
        method,
        headers: {
            Authorization: token,
        }
    });
    const body = await res.json();
    return body
}

export const detelePostService = async (postId) => {
    const token = getToken()

    const res = await fetch(`${baseURL}/posts/${postId}`, {
        method: 'delete',
        headers: {
            Authorization: token,
        }
    });
    const body = await res.json();
    return body;
}