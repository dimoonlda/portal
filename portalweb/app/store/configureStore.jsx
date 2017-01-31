import * as redux from 'redux';
import thunk from 'redux-thunk';

import userProfileReducer from 'userProfileReducer'
import {deviceReducer, deviceTypesReducer, deviceBrandsReducer} from 'deviceReducer';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    userProfile: userProfileReducer,
      userDevices: deviceReducer,
      deviceTypes: deviceTypesReducer,
      deviceBrands: deviceBrandsReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
