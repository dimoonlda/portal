import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DeviceListRow = ({device}) => {
    return (
        <tr>
            <td>
                <Link to={'/devices/' + device.id}>{device.title}</Link>
            </td>
        </tr>
    )
};

DeviceListRow.propTypes = {
    device: PropTypes.object.isRequired
};

export default DeviceListRow;