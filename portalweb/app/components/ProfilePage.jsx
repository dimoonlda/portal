import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import ProfileView from 'ProfileView';
import * as userProfileActions from '../actions/userProfileActions';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentWillMount() {
    //     this.props.loadUserProfile();
    // }

    render() {
        console.log('ProfilePage: render.', this.props.userProfile);
        const userProfile = this.props.userProfile;
        return (
            <div>
                <ProfileView userProfile={userProfile}/>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadUserProfile: () => {
//             dispatch(userProfileActions.loadUserProfile());
//         }
//     }
// };

export default connect(mapStateToProps, /*mapDispatchToProps*/)(ProfilePage);