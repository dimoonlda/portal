import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

import * as deviceActions from 'deviceActions';
import DeviceForm from 'DeviceForm';

class NewDevicePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            device: {},
            saving: false
        }
    }

    updateDeviceState = (event) => {
        const field = event.target.name;
        const device = this.state.device;
        device[field] = event.target.value;
        return this.setState({device: device});
    };

    saveUserDevice = (event) => {
        event.preventDefault();
        this.props.saveUserDevice(this.state.device);
        this.setState({saving: true});
    };

    cancelUserDeviceForm = () => {
        console.log('Cancel new device form.');
        browserHistory.goBack();
    };

    render() {
        let {device} = this.state;
        const {deviceTypes, deviceBrands} = this.props;

        return (
            <div className="row columns">
                <DeviceForm device={device}
                            onChange={this.updateDeviceState}
                            onSave={this.saveUserDevice}
                            onCancel={this.cancelUserDeviceForm}
                            deviceBrands={deviceBrands}
                            deviceTypes={deviceTypes}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        deviceTypes: state.deviceTypes.types,
        deviceBrands: state.deviceBrands.brands
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveUserDevice: (device) => {
            dispatch(deviceActions.createUserDevice(device))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDevicePage);

