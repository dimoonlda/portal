import axios from 'axios';

import * as actionsTypes from 'actionTypes';

export const loadUserProfileSuccess = (userProfile) => {
    return {
        type: actionsTypes.LOAD_USER_PROFILE_SUCCESS,
        userProfile
    }
};

export const updateUserProfileSuccess = (userProfile) => {
    return {
        type: actionsTypes.UPDATE_USER_PROFILE_SUCCESS,
        userProfile
    }
};

export const loadUserProfile = () => {
    return (dispatch) => {
        axios.get(`http://localhost:8080/users/profile`)
            .then(function (response) {
                if (response.status === 200) {
                    dispatch(loadUserProfileSuccess(response.data.data));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const updateUserProfile = (userProfile) => {
    return (dispatch, getState) => {
        axios.post(`http://localhost:8080/users/profile`,
            {
                ...userProfile
            })
            .then(function (response) {
                if (response.status === 200) {
                    dispatch(updateUserProfileSuccess(response.data.data));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};