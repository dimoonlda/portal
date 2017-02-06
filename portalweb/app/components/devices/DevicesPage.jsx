import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as deviceActions from 'deviceActions';

import DeviceList from 'DeviceList';

class DevicesPage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        this.props.loadUserDevices();
    }

    render() {
        const devices = this.props.devices ? this.props.devices : [];
        return (
            <div className="row columns">
                <h3><a href="#">Devices</a></h3>
                <div className="small-12 medium-4 columns">
                    <div className="row columns">
                        <Link to="/devices/new" className="button float-right">Add device</Link>
                    </div>
                    <div className="row columns">
                        <DeviceList devices={devices}/>
                    </div>
                </div>
                <div className="small-12 medium-8 columns">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

DevicesPage.propTypes = {
    devices: PropTypes.array.isRequired,
    children: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        devices: state.userDevices.devices
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserDevices: () => {
            dispatch(deviceActions.loadUserDevices());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesPage);
