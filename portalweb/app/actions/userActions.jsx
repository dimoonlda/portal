import axios from 'axios';
import {setUserProfile} from 'actions';

export var getUserById = (userId) => {
    return (dispatch, getState) => {
    axios.get(`http://localhost:8080/users/${userId}`)
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

export var getUserProfile = () => {
    return (dispatch, getState) => {
        axios.get(`http://localhost:8080/users/profile`)
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