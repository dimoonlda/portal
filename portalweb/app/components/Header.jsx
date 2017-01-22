import React from 'react';

export var Header = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="large-12 columns">
                    <h2>First React App
                        <small>This is my first React App. It's awesome.</small>
                    </h2>
                    <hr/>
                </div>
            </div>
        )
    }
});