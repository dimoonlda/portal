import React, {PropTypes} from 'react';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: this.props.userProfile
        };
        this.updateProfileState = this.updateProfileState.bind(this);
    }

    updateProfileState(event) {
        const field = event.target.name;
        const userProfile = this.state.userProfile;
        userProfile[field] = event.target.value;
        return this.setState({userProfile: userProfile});
    }

    render() {
        let {firstName, lastName, email, dateOfBirth} = this.state.userProfile;
        return (
                <div className="row columns">
                    <div className="callout secondary medium-12 columns">
                        <h4>Main information</h4>
                        <hr/>
                        <form onSubmit={this.onSubmitUserProfile}>
                            <div className="row">
                                <div className="medium-6 columns">
                                    <label>First name
                                        <input type="text" name="firstName"
                                               placeholder="Input first name"
                                               value={firstName}
                                               onChange={this.updateProfileState}/>
                                    </label>
                                </div>
                                <div className="medium-6 columns">
                                    <label>Last name
                                        <input type="text" name="lastName"
                                               placeholder="Input last name"
                                               value={lastName}
                                               onChange={this.updateProfileState}/>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="medium-6 columns">
                                    <label>Email
                                        <input type="email" name="email"
                                               placeholder="Input email"
                                               value={email}
                                               onChange={this.updateProfileState}/>
                                    </label>
                                </div>
                                <div className="medium-3 columns float-left">
                                    <label>Date of birth
                                        <input type="date" name="dateOfBirth"
                                               placeholder="Input date of birth"
                                               value={dateOfBirth}
                                               onChange={this.updateProfileState}/>
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
        )
    }
}

ProfileForm.propTypes = {
    userProfile: PropTypes.object.isRequired
};

export default ProfileForm;