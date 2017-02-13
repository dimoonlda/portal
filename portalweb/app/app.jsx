import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import ProfilePage from 'ProfilePage';
import {Main} from 'Main';
import MainPage from 'MainPage';
import {Home} from 'Home';
import LoginPage from 'LoginPage';
import DevicesPage from 'DevicesPage';
import DevicePage from 'DevicePage';
import NewDevicePage from 'NewDevicePage';
import MainPortal from 'MainPortal';

import * as userProfileActions from 'userProfileActions';
import * as deviceActions from 'deviceActions';
import * as tokenService from 'tokenService';
import * as tokenActions from 'tokenActions';

var store = require('configureStore').configure();

//store.dispatch(userProfileActions.loadUserProfile());
if (!tokenService.getAccessTokenFromSessionStorage()) {
    //store.dispatch(tokenActions.getAccessTokenFromServer('dimoon', 'dima'));
}

//store.dispatch(deviceActions.loadDeviceTypes());
//store.dispatch(deviceActions.loadDeviceBrands());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={MainPage}>
                <Route path="/portal" component={MainPortal}>
                    <Route path="/portal/profile" component={ProfilePage}/>
                    <Route path="/portal/devices" component={DevicesPage}>
                        <Route path="/portal/devices/new" component={NewDevicePage}/>
                        <Route path="/portal/devices/:id" component={DevicePage}/>
                    </Route>
                </Route>
                <Route path="/login" component={LoginPage}/>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
