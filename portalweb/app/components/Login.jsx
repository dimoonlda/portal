import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="medium-4 small-centered columns">
                    <div className="callout secondary">
                        <h5>Please Sign In</h5>
                        <hr/>
                        <form>
                            <div className="row columns">
                                <input type="email" placeholder="E-mail"/>
                            </div>
                            <div className="row columns">
                                <input type="password" placeholder="Password"/>
                            </div>
                            <div className="row columns">
                                <button type="submit" className="button expanded">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});