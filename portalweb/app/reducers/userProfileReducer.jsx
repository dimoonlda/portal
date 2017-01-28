import * as actionsTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userProfileReducer(state = initialState.userProfile, action){
    switch (action.type) {
        case actionsTypes.LOAD_USER_PROFILE_SUCCESS:
            return action.userProfile;
            break;
        case actionsTypes.UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                ...action.userProfile
            };
            break;
        default:
            return state;
    }
};