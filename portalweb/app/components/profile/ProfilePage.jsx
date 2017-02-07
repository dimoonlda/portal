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
        const userProfile = this.props.userProfile;
        return (
            <div>
                <ProfileView userProfile={userProfile}
                             updateUserProfile={this.props.updateUserProfile}
                             canEdit={this.props.canEdit}
                />
            </div>
        )
    }
}

ProfilePage.propTypes = {
    userProfile: PropTypes.object.isRequired
};

ProfilePage.defaultProps = {
    userProfile: {}
};

const mapStateToProps = (state) => {
    return {
        userProfile: state.userProfile.data,
        canEdit: !state.userProfile.isLoading
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