
export var userProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_PROFILE':
            return action.user;
            break;
        default:
            return state;
    }
};