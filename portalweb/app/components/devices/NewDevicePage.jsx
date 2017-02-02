import React from 'react';
import {connect} from 'react-redux';

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

    render() {
        let {device} = this.state.device;
        const {deviceTypes, deviceBrands} = this.props;
        return (
            <div className="row columns">
                <DeviceForm device={device} onChange="" onSave="" onCancel=""/>
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDevicePage);

