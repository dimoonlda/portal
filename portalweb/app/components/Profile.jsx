import React from 'react';
import {connect} from 'react-redux';
import {getUserProfile, updateUserProfile} from 'userActions';

export var Profile = React.createClass({
    componentWillMount: function () {
        var {dispatch} = this.props;
        dispatch(getUserProfile());
    },
    onSubmitUserProfile: function (event) {
        var {dispatch} = this.props;
        event.preventDefault();
        dispatch(updateUserProfile({
            "email": this.refs.email.value,
            "firstName": this.refs.firstName.value,
            "lastName": this.refs.lastName.value,
            "dateOfBirth": this.refs.dateOfBirth.value
        }));
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
                        <form onSubmit={this.onSubmitUserProfile}>
                            <div className="row">
                                <div className="medium-6 columns">
                                    <label>First name
                                        <input type="text" ref="firstName" placeholder="Input first name" value={userProfile.firstName}
                                        onChange={() => {
                                            console.log('first name: ', this.refs.firstName.value);
                                        }}/>
                                    </label>
                                </div>
                                <div className="medium-6 columns">
                                    <label>Last name
                                        <input type="text" ref="lastName" placeholder="Input last name" value={userProfile.lastName}/>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="medium-6 columns">
                                    <label>Email
                                        <input type="email" ref="email" placeholder="Input email" value={userProfile.email}/>
                                    </label>
                                </div>
                                <div className="medium-3 columns float-left">
                                    <label>Date of birth
                                        <input type="date" ref="dateOfBirth" placeholder="Input date of birth" value={userProfile.dateOfBirth}/>
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
                                        <input type="password" ref="oldPass" placeholder="Old password"/>
                                    </label>
                                </div>
                                <div className="medium-4 columns">
                                    <label>New password
                                        <input type="password" ref="newPass" placeholder="New password"/>
                                    </label>
                                </div>
                                <div className="medium-4 columns">
                                    <label>Repeat new password
                                        <input type="password" ref="newPassRepeated" placeholder="New password"/>
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
        return {
            state
        };
    })(Profile);