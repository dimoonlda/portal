import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <footer className="row">
                <div className="large-12 columns">
                    <hr/>
                    <div className="row">
                        <div className="large-6 columns">
                            <p>&copy; Copyright no one at all. Go to town.</p>
                        </div>
                        <div className="large-6 columns">
                            <ul className="float-right">
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                                <li><a href="#">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
});