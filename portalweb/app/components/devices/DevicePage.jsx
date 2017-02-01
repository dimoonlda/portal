import React from 'react';
import {connect} from 'react-redux';

class DevicePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            device: Object.assign({}, this.props.device)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.device.id != nextProps.device.id) {
            this.setState({
                device: Object.assign({}, nextProps.device)
            });
        }
    }

    render() {
        const {device} = this.state;
        return (
            <div className="row columns">
                <p>ID: {device.id}</p>
                <p>Title: {device.title}</p>
                <p>Brand: {device.brand}</p>
                <p>Model: {device.model}</p>
                <p>Date of manufacturing: {device.dateOfManufacturing}</p>
                <p>Url: <a href="{device.url}">{device.url}</a></p>
            </div>
        )
    }
}

function getDeviceById(devices, id) {
    const device = devices.find(device => id == device.id);
    return Object.assign({}, device);
}

function mapStateToProps(state, ownProps) {
    const deviceId = ownProps.params.id;
    const devices = state.userDevices.devices;
    console.log('mapStateToProps: ', devices, deviceId);
    let device = {};
    if (deviceId && devices) {
        device = getDeviceById(devices, deviceId);
    }
    return {
        device: device
    }
}

export default connect(mapStateToProps)(DevicePage);
