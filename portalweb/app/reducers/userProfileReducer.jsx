import * as actionsTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userProfileReducer(state = initialState.userProfile, action){
    switch (action.type) {
        case actionsTypes.LOAD_USER_PROFILE_SUCCESS:
            return {
                isLoading: false,
                error: null,
                data: action.userProfile
            };
            break;
        case actionsTypes.UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.userProfile
                }
            };
            break;
        case actionsTypes.LOADING_USER_PROFILE:
            return {
                isLoading: true
            };
            break;
        default:
            return state;
    }
};