import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import ProfileView from 'ProfileView';
import * as userProfileActions from '../../actions/userProfileActions';

/**
 * Container component for user profile
 */
class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadUserProfile();
    }

    render() {
        console.log('ProfilePage: render.', this.props.userProfile);
        const userProfile = this.props.userProfile;
        return (
            <div>
                <ProfileView userProfile={userProfile}
                             updateUserProfile={this.props.updateUserProfile}/>
            </div>
        )
    }
}

ProfilePage.propTypes = {
    userProfile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    console.log('ProfilePage: mapStateToProps.', state.userProfile);
    return {
        userProfile: state.userProfile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserProfile: () => {
            dispatch(userProfileActions.loadUserProfile());
        },
        updateUserProfile: (userProfile) => {
            dispatch(userProfileActions.updateUserProfile(userProfile));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);