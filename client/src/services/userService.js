const baseURL = import.meta.env.VITE_API_URL; 

import { getToken } from "../utils/getToken";

export const signUpService = async (username, email, password) => {
    const res = await fetch(`${baseURL}/users/register`,{
        method: 'post',
        headers: {
            'content-Type': "aplication/json"
        },
        body: JSON.stringify({
            username,
            email,
            password,
        })

    });

    const body = await res.json();
    return body;
};

export const signInService = async (email, password) => {
    const res = await fetch(`${baseURL}/users/login`,{
        method: 'post',
        headers: {
            'content-Type': "aplication/json"
        },
        body: JSON.stringify({
            email,
            password,
        })

    });

    const body = await res.json();
    return body;
};

export const getPrivateProfileService = async () => {
    const token = getToken();

    const res = await fetch(`${baseURL}/users`, {
        headers: {
            Authorization: token,
        },
    });
    const body = await res.json();
    return body;
};
