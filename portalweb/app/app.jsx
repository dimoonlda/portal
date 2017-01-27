import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import ProfilePage from 'ProfilePage';
import {Main} from 'Main';
import {Home} from 'Home';
import Login from 'Login';
import * as userProfileActions from 'userProfileActions';

var store = require('configureStore').configure();

store.dispatch(userProfileActions.loadUserProfile());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <Route path="profile" component={ProfilePage}/>
                <Route path="login" component={Login}/>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
