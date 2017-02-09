import React from 'react';
import {connect} from 'react-redux';

import * as tokenService from 'tokenService';
import {Navigation} from 'Navigation';

class NavigationContainer extends React.Component {
    constructor(props) {
        super(props);
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: tokenService.getAccessTokenFromSessionStorage()
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);