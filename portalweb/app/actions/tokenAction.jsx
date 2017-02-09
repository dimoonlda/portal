import axios from 'axios';

import * as actionsTypes from 'actionTypes';
import * as tokenService from 'tokenService';

export const updateAccessTokenSuccess = (accessToken) => {
    return {
        type: actionsTypes.UPDATE_ACCESS_TOKEN_SUCCESS,
        accessToken
    }
};

export const updateRefreshTokenSuccess = (refreshToken) => {
    return {
        type: actionsTypes.UPDATE_REFRESH_TOKEN_SUCCESS,
        refreshToken
    }
};

export const getAccessTokenFromServer = (userName, password) => {
    return (dispatch) => {
        axios.post(`http://localhost:8080/oauth/token?grant_type=password&username=${userName}&password=${password}&client_id=portalReact`,
            null, {headers: {'Authorization': 'Basic cG9ydGFsUmVhY3Q6MTIzNDU2Nzg5'}})
            .then(function (response) {
                if (response.status === 200) {
                    sessionStorage.setItem(tokenService.ACCESS_TOKEN_STORAGE_KEY, response.data.access_token);
                    sessionStorage.setItem(tokenService.REFRESH_TOKEN_STORAGE_KEY, response.data.refresh_token);
                    dispatch(updateAccessTokenSuccess(response.data.access_token));
                    dispatch(updateRefreshTokenSuccess(response.data.refresh_token));
                }
            }).catch(function (error) {
            console.log(error);
        })
    }
};