import * as redux from 'redux';
import thunk from 'redux-thunk';

import userProfileReducer from 'userProfileReducer'
import {deviceReducer, deviceTypesReducer, deviceBrandsReducer} from 'deviceReducer';
import {logger} from 'logger';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    userProfile: userProfileReducer,
      userDevices: deviceReducer,
      deviceTypes: deviceTypesReducer,
      deviceBrands: deviceBrandsReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
