import { TOKEN_LOCAL_STORAGE_KEY } from "./constants";

export const getToken = () => {
    const authToken = localStorage(TOKEN_LOCAL_STORAGE_KEY)
    return authToken ? authToken : null
};