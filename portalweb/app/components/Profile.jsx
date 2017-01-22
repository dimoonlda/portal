import React from 'react';

export var Profile = React.createClass({
    render: function () {
        return (
            <div>
                <h3><a href="#">Profile</a></h3>
                <div className="row">
                    <div className="callout secondary medium-12 columns">
                        <h5>Main information</h5>
                        <hr/>
                        <form>
                            <div className="row">
                                <div className="medium-6 columns">
                                    <label>First name
                                        <input type="text" placeholder="Input first name"/>
                                    </label>
                                </div>
                                <div className="medium-6 columns">
                                    <label>Last name
                                        <input type="text" placeholder="Input last name"/>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="medium-6 columns">
                                    <label>Email
                                        <input type="email" placeholder="Input email"/>
                                    </label>
                                </div>
                                <div className="medium-3 columns float-left">
                                    <label>Date of birth
                                        <input type="date" placeholder="Input date of birth"/>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="medium-12 columns">
                                    <button type="submit" className="button float-right">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="callout secondary medium-12 columns">
                        <h5>Change password</h5>
                        <hr/>
                        <form>
                            <div className="row">
                                <div className="medium-4 columns">
                                    <label>Old password
                                        <input type="password" placeholder="Old password"/>
                                    </label>
                                </div>
                                <div className="medium-4 columns">
                                    <label>New password
                                        <input type="password" placeholder="New password"/>
                                    </label>
                                </div>
                                <div className="medium-4 columns">
                                    <label>Repeat new password
                                        <input type="password" placeholder="New password"/>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="medium-12 columns">
                                    <button type="submit" className="button float-right">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
});