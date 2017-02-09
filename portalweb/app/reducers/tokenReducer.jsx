import * as actionsTypes from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export function tokenReducer(state = initialState.token, action){
    switch (action.type) {
        case actionsTypes.UPDATE_ACCESS_TOKEN_SUCCESS:
            return {
                ...state,
                accessToken: action.accessToken
            };
            break;
        case actionsTypes.UPDATE_REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                refreshToken: action.refreshToken
            };
            break;
        default:
            return state;
    }
}