import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import DeviceForm from 'DeviceForm';

class DevicePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            device: Object.assign({}, this.props.device),
            deviceBrand: Object.assign({}, this.props.deviceBrand),
            deviceType: Object.assign({}, this.props.deviceType),
            isEditing: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.device.id != nextProps.device.id) {
            this.setState({
                device: Object.assign({}, nextProps.device)
            });
        }
        if (this.props.deviceBrand.id != nextProps.deviceBrand.id) {
            this.setState({
                deviceBrand: Object.assign({}, nextProps.deviceBrand)
            });
        }
        if (this.props.deviceType.id != nextProps.deviceType.id) {
            this.setState({
                deviceType: Object.assign({}, nextProps.deviceType)
            });
        }
    }

    toggleEdit = () => {
        this.setState({isEditing: !this.state.isEditing})
    };

    updateDeviceState = (event) => {
        const field = event.target.name;
        const device = Object.assign({}, this.state.device);
        console.log('updateDeviceState', event.target.name, event.target.value, this.state.device);
        device[field] = event.target.value;
        return this.setState({device: device});
    };

    saveUserDevice = () => {

    };

    cancelEditUserDeviceForm = () => {
        browserHistory.goBack();
    };

    render() {
        const {device, deviceBrand, deviceType, isEditing} = this.state;
        const {deviceTypes, deviceBrands} = this.props;

        const renderDeviceForm = () => {
            return (
                <div className="row columns">
                    <DeviceForm device={device}
                                onChange={this.updateDeviceState}
                                onSave={this.saveUserDevice}
                                onCancel={this.cancelEditUserDeviceForm}
                                deviceBrands={deviceBrands}
                                deviceTypes={deviceTypes}
                    />
                </div>
            )
        };

        const renderDeviceShow = () => {
            return (
                <div className="row columns">
                    <p>ID: {device.id}</p>
                    <p>Title: {device.title}</p>
                    <p>Type: {deviceType.title}</p>
                    <p>Brand: {deviceBrand.title}</p>
                    <p>Model: {device.model}</p>
                    <p>Date of manufacturing: {device.dateOfManufacturing}</p>
                    <p>Url: <a href={device.url} target="blank">{device.url}</a></p>
                    <div className="row">
                        <div className="medium-12 columns">
                            <input type="button" onClick={this.toggleEdit}
                                   className="button float-right"
                                   value="Edit"/>
                        </div>
                    </div>
                </div>
            )
        };

        return isEditing ? renderDeviceForm() : renderDeviceShow();
    }
}

function getDeviceById(devices, id) {
    const device = devices.find(device => id == device.id);
    return Object.assign({}, device);
}

function getBrandById(brands, id) {
    const brand = brands.find(brand => id == brand.id);
    return Object.assign({}, brand);
}

function getTypeById(types, id) {
    const type = types.find(type => id == type.id);
    return Object.assign({}, type);
}

function mapStateToProps(state, ownProps) {
    const deviceId = ownProps.params.id;
    const devices = state.userDevices.devices;
    const deviceBrands = state.deviceBrands.brands;
    const deviceTypes = state.deviceTypes.types;
    let deviceBrand = {};
    let deviceType = {};
    let device = {};
    if (deviceId && devices) {
        device = getDeviceById(devices, deviceId);
    }
    if (device.brand) {
        deviceBrand = getBrandById(deviceBrands, device.brand);
    }
    if (device.type) {
        deviceType = getTypeById(deviceTypes, device.type);
    }
    return {
        device,
        deviceBrand,
        deviceType,
        deviceBrands,
        deviceTypes
    }
}

DevicePage.propTypes = {
    device: React.PropTypes.shape({
        id: React.PropTypes.number,
        title: React.PropTypes.string,
        type: React.PropTypes.number,
        model: React.PropTypes.string,
        brand: React.PropTypes.number,
        dateOfManufacturing: React.PropTypes.string,
        url: React.PropTypes.string
    }).isRequired,
    deviceBrand: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired
    }).isRequired,
    deviceTitle: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired
    }).isRequired,
    deviceBrands: React.PropTypes.array.isRequired,
    deviceTypes: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps)(DevicePage);
