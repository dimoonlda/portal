import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class ProfileView extends React.Component {
    constructor(props){
        super(props);
        //Initialize state
        this.state = {
            userProfile: Object.assign({}, this.props.userProfile),
            saving: false,
            isEditing: false
        }
    }
    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        //Update state when receive new props value
        this.setState({
            ...this.state,
            userProfile: Object.assign({}, nextProps.userProfile)
        });
    }

    render() {
        return (
            <div>
                <h3><a href="#">Profile</a></h3>
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
                                    <input type="button" className="button float-right" value="Edit"/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

ProfileView.propTypes = {
    userProfile: PropTypes.object.isRequired
};

export default ProfileView;
