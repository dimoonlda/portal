import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import ProfileForm from 'ProfileForm';

class ProfileView extends React.Component {
    constructor(props) {
        super(props);
        //Initialize state
        this.state = {
            userProfile: Object.assign({}, this.props.userProfile),
            saving: false,
            isEditing: false
        };
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    componentDidMount() {

    }

    toggleEdit() {
        this.setState({isEditing: true})
    }

    componentWillReceiveProps(nextProps) {
        //Update state when receive new props value
        this.setState({
            ...this.state,
            userProfile: Object.assign({}, nextProps.userProfile)
        });
    }

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
                                <input type="button" onClick={this.toggleEdit} className="button float-right"
                                       value="Edit"/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        };

        const renderProfileForm = () => {
            return (
                <ProfileForm userProfile={this.state.userProfile}/>
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
    userProfile: PropTypes.object.isRequired
};

export default ProfileView;
