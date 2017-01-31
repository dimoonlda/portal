import axios from 'axios';

import * as actionsTypes from 'actionTypes';

export const loadingUserDevices = () => {
    return {
        type: actionsTypes.LOADING_USER_DEVICES
    }
};

export const loadUserDevicesSuccess = (devices) => {
    return {
        type: actionsTypes.LOAD_USER_DEVICES_SUCCESS,
        devices
    }
};

export const loadUserDevices = () => {
    return (dispatch) => {
        dispatch(loadingUserDevices());
        axios.get(`http://localhost:8080/devices`)
            .then(function (response) {
                if (response.status === 200) {
                    dispatch(loadUserDevicesSuccess(response.data.data));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const loadingDeviceTypes = () => {
    return {
        type: actionsTypes.LOADING_DEVICE_TYPES
    }
};

export const loadDeviceTypesSuccess = (types) => {
    return {
        type: actionsTypes.LOAD_DEVICE_TYPES_SUCCESS,
        types
    }
};

export const loadDeviceTypes = () => {
    return (dispatch) => {
        dispatch(loadingDeviceTypes());
        axios.get(`http://localhost:8080/deviceTypes`)
            .then(function (response) {
                if (response.status === 200) {
                    dispatch(loadDeviceTypesSuccess(response.data.data));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export const loadingDeviceBrands = () => {
    return {
        type: actionsTypes.LOADING_DEVICE_BRANDS
    }
};

export const loadDeviceBrandsSuccess = (brands) => {
    return {
        type: actionsTypes.LOAD_DEVICE_BRANDS_SUCCESS,
        brands
    }
};

export const loadDeviceBrands = () => {
    return (dispatch) => {
        dispatch(loadingDeviceBrands());
        axios.get(`http://localhost:8080/deviceBrands`)
            .then(function (response) {
                if (response.status === 200) {
                    dispatch(loadDeviceBrandsSuccess(response.data.data));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};