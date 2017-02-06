import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import ProfileForm from 'ProfileForm';

/**
 * Presentation component for viewing user profile
 */
class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        //Initialize state
        this.state = {
            userProfile: Object.assign({}, this.props.userProfile),
            saving: false,
            isEditing: false,
            userProfileBeforeEdit: {},
            canEdit: this.props.canEdit
        };
    }

    componentDidMount() {

    }

    toggleEdit = () => {
        this.setState({
            isEditing: true,
            userProfileBeforeEdit: Object.assign({}, this.state.userProfile)
        })
    };

    componentWillReceiveProps(nextProps) {
        //Update state when receive new props value
        this.setState({
            userProfile: Object.assign({}, nextProps.userProfile),
            saving: false,
            isEditing: false,
            canEdit: nextProps.canEdit
        });
    }

    updateProfileState = (event) => {
        const field = event.target.name;
        const userProfile = this.state.userProfile;
        userProfile[field] = event.target.value;
        return this.setState({userProfile: userProfile});
    };

    saveProfile = (event) => {
        event.preventDefault();
        this.props.updateUserProfile(this.state.userProfile);
        this.setState({
            saving: true,
            userProfileBeforeEdit: {}
        });
    };

    cancelProfileForm = (event) => {
        event.preventDefault();
        this.setState({
            isEditing: false,
            userProfile: Object.assign({}, this.state.userProfileBeforeEdit),
            userProfileBeforeEdit: {}
        });
    };

    render() {
        const renderProfileView = () => {
            return (
                <div className="row columns">
                    <div className="callout secondary medium-12 columns">
                        <h4>Main information</h4>
                        <hr/>
                        <div className="row">
                            <div className="medium-6 columns">
                                <h5>First name</h5>
                                <div>{this.state.userProfile.firstName}</div>
                            </div>
                            <div className="medium-6 columns">
                                <h5>Last name</h5>
                                <div>{this.state.userProfile.lastName}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="medium-6 columns">
                                <h5>Email</h5>
                                <div>{this.state.userProfile.email}</div>
                            </div>
                            <div className="medium-3 columns float-left">
                                <h5>Date of birth</h5>
                                <div>{this.state.userProfile.dateOfBirth}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="medium-12 columns">
                                <input type="button" onClick={this.toggleEdit}
                                       className="button float-right"
                                       disabled={!this.state.canEdit}
                                       value="Edit"/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        };

        const renderProfileForm = () => {
            return (
                <ProfileForm userProfile={this.state.userProfile}
                             onSave={this.saveProfile}
                             onCancel={this.cancelProfileForm}
                             onChange={this.updateProfileState}
                             saving={this.state.saving}
                />
            )
        };

        return (
            <div>
                <h3><a href="#">Profile</a></h3>
                {this.state.isEditing ? renderProfileForm() : renderProfileView()}
            </div>
        )
    }
}

ProfileView.propTypes = {
    userProfile: PropTypes.object.isRequired,
    updateUserProfile: PropTypes.func.isRequired,
    canEdit: PropTypes.bool.isRequired
};

export default ProfileView;
