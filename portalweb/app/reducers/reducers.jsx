
export var userProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_PROFILE':
            return action.userProfile;
            break;
        default:
            return state;
    }
};