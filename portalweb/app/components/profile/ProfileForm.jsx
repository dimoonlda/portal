import React, {PropTypes} from 'react';

/**
 * Presentation component for editing user profile
 */
class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userProfile: this.props.userProfile
        };
    }

    render() {
        let {firstName, lastName, email, dateOfBirth} = this.state.userProfile;
        return (
            <div className="row columns">
                <div className="callout secondary medium-12 columns">
                    <h4>Main information</h4>
                    <hr/>
                    <form>
                        <div className="row">
                            <div className="medium-6 columns">
                                <label>First name
                                    <input type="text" name="firstName"
                                           placeholder="Input first name"
                                           value={firstName}
                                           onChange={this.props.onChange}/>
                                </label>
                            </div>
                            <div className="medium-6 columns">
                                <label>Last name
                                    <input type="text" name="lastName"
                                           placeholder="Input last name"
                                           value={lastName}
                                           onChange={this.props.onChange}/>
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="medium-6 columns">
                                <label>Email
                                    <input type="email" name="email"
                                           placeholder="Input email"
                                           value={email}
                                           onChange={this.props.onChange}/>
                                </label>
                            </div>
                            <div className="medium-3 columns float-left">
                                <label>Date of birth
                                    <input type="date" name="dateOfBirth"
                                           placeholder="Input date of birth"
                                           value={dateOfBirth}
                                           onChange={this.props.onChange}/>
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="medium-12 columns">
                                <div className="button-group float-right">
                                    <input type="submit" className="button"
                                           value="Save" onClick={this.props.onSave}/>
                                    <input type="button" className="button"
                                           value="Cancel" onClick={this.props.onCancel}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

ProfileForm.propTypes = {
    userProfile: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default ProfileForm;