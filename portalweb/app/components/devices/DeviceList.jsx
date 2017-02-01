import React, {PropTypes} from 'react';

import DeviceListRow from 'DeviceListRow';

const DeviceList = ({devices}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>
            {devices.map(device =>
                <DeviceListRow key={device.id} device={device}/>
            )}
            </tbody>
        </table>
    )
};

DeviceList.propTypes = {
    devices: PropTypes.array.isRequired
};

export default DeviceList;