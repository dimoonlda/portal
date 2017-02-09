import React from 'react';
import {connect} from 'react-redux';

import {Main} from 'Main';
import {Login} from 'Login';
import * as tokenService from 'tokenService';

class MainPage extends React.Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);