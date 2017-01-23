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
                    <aside className="medium-2 large-2 columns">
                        <Navigation/>
                    </aside>
                    <div className="medium-10 large-10 columns" role="content">
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
});