const ACCESS_TOKEN_STORAGE_KEY = 'access_token';
const REFRESH_TOKEN_STORAGE_KEY = 'refresh_token';

export const getAccessTokenFromSessionStorage = () => {
    console.log('token - getAccessTokenFromSessionStorage');
    return sessionStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
};