import React from 'react';
import {connect} from 'react-redux';

import Login from 'Login';
import * as tokenService from 'tokenService';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: Object.assign({}, {login: null, password: null})
        }
    }

    onUpdateLoginState = (event) => {
        const field = event.target.name;
        const loginData = Object.assign({}, this.state.loginData);
        loginData[field] = event.target.value;
        return this.setState({loginData: loginData});
    };

    onLogin = (event) => {
        event.preventDefault();
        let device = Object.assign({}, this.state.device);
        console.log('saveUserDevice: ', device);
        if (!this.state.device.type) {
            device['type'] = this.props.deviceTypes[0].id;
        }
        if (!this.state.device.brand) {
            device['brand'] = this.props.deviceBrands[0].id;
        }
        this.props.saveUserDevice(device);
        this.setState({saving: true});
    };

    render() {
        return (
            <Login onChange={this.onUpdateLoginState}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        //accessToken: tokenService.getAccessTokenFromSessionStorage()
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);