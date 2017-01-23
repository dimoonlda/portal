import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {Profile} from 'Profile';
import {Main} from 'Main';
import {Home} from 'Home';
import Login from 'Login';

import * as actions from 'actions';
//var store = require('configureStore').configure();

//store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="profile" component={Profile}/>
            <Route path="login" component={Login}/>
            <IndexRoute component={Home}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
/*ReactDOM.render(
 <Provider store={store}>
 <TodoApp/>
 </Provider>,
 document.getElementById('app')
 );*/
