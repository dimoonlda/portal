import React from 'react';
import {Link, IndexLink} from 'react-router';

export var Navigation = React.createClass({
   render: function () {
        return (
            <div>
                <h5>Categories</h5>
                <ul className="menu vertical">
                    <li>
                        <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
                    </li>
                    <li>
                        <Link to="/login" activeClassName="active-link">Login</Link>
                    </li>
                    <li>
                        <Link to="/profile" activeClassName="active-link">Profile</Link>
                    </li>
                </ul>
            </div>
        )
   }
});