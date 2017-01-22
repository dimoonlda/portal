import React from 'react';

import {Header} from 'Header';
import {Navigation} from 'Navigation';
import Footer from 'Footer';

export var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <aside className="large-3 columns">
                        <Navigation/>
                    </aside>
                    <div className="large-9 columns" role="content">
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
});