import * as actionsTypes from '../actions/actionTypes';
import initialState from './initialState';

export function deviceReducer(state = initialState.userDevices, action){
    switch (action.type) {
        case actionsTypes.LOAD_USER_DEVICES_SUCCESS:
            return {
                isLoading: false,
                error: null,
                devices: action.devices
            };
            break;
        case actionsTypes.LOADING_USER_DEVICES:
            return {
                isLoading: true
            };
            break;
        default:
            return state;
    }
}

export function deviceTypesReducer(state = initialState.deviceTypes, action){
    switch (action.type) {
        case actionsTypes.LOAD_DEVICE_TYPES_SUCCESS:
            return {
                isLoading: false,
                error: null,
                types: action.types
            };
            break;
        case actionsTypes.LOADING_DEVICE_TYPES:
            return {
                isLoading: true
            };
            break;
        default:
            return state;
    }
}

export function deviceBrandsReducer(state = initialState.deviceBrands, action){
    switch (action.type) {
        case actionsTypes.LOAD_DEVICE_BRANDS_SUCCESS:
            return {
                isLoading: false,
                error: null,
                brands: action.brands
            };
            break;
        case actionsTypes.LOADING_DEVICE_BRANDS:
            return {
                isLoading: true
            };
            break;
        default:
            return state;
    }
}