import axios from 'axios';

import * as actionsTypes from 'actionTypes';

export var loadUserProfileSuccess = (userProfile) => {
    return {
        type: actionsTypes.LOAD_USER_PROFILE_SUCCESS,
        userProfile
    }
};

export var loadUserProfile = () => {
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

export var updateUserProfile = (userProfile) => {
    return (dispatch, getState) => {
        axios.post(`http://localhost:8080/users/profile`,
            {
                ...userProfile
            })
            .then(function (response) {
                if (response.status === 200) {
                    dispatch(setUserProfile(response.data.data));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};