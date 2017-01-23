import React from 'react';
import {connect} from 'react-redux';
import {getUserById} from 'userActions';

export var Profile = React.createClass({
    componentWillMount: function () {
        var {dispatch} = this.props;
        dispatch(getUserById(100));
    },
    render: function () {
        var {userProfile} = this.props;
        return (
            <div>
                <h3><a href="#">Profile</a></h3>
                <div className="row columns">
                    <div className="callout secondary medium-12 columns">
                        <h5>Main information</h5>
                        <hr/>
                        <form>
                            <div className="row">
                                <div className="medium-6 columns">
                                    <label>First name
                                        <input type="text" placeholder="Input first name" value={userProfile.firstName}/>
                                    </label>
                                </div>
                                <div className="medium-6 columns">
                                    <label>Last name
                                        <input type="text" placeholder="Input last name" value={userProfile.lastName}/>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="medium-6 columns">
                                    <label>Email
                                        <input type="email" placeholder="Input email" value={userProfile.email}/>
                                    </label>
                                </div>
                                <div className="medium-3 columns float-left">
                                    <label>Date of birth
                                        <input type="date" placeholder="Input date of birth" value={userProfile.dateOfBirth}/>
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
                <div className="row columns">
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
            </div>
        )
    }
});

export default connect(
    (state) => {
        return state;
    })(Profile);