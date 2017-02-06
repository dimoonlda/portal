import React, {PropTypes} from 'react';

import SelectComponent from 'SelectComponent';

/**
 * Presentation component for editing user profile
 */
class DeviceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            device: Object.assign({}, this.props.device)
        };
    }

    getDeviceTypesAsSelectOptions(deviceTypes) {
        return deviceTypes.map(type => {
            return {value: type.id, name: type.title}
        })
    }

    getDeviceBrandsAsSelectOptions(deviceBrands) {
        return deviceBrands.map(brand => {
            return {value: brand.id, name: brand.title}
        })
    }

    render() {
        let {title, type, model, brand, dateOfManufacturing, url} = this.state.device;
        const {deviceTypes, deviceBrands} = this.props;
        return (
            <div className="row columns">
                <div className="callout secondary medium-12 columns">
                    <h4>New device</h4>
                    <hr/>
                    <form>
                        <div className="row columns">
                            <label>Title
                                <input type="text" name="title"
                                       placeholder="Input title"
                                       value={title}
                                       onChange={this.props.onChange}/>
                            </label>
                        </div>
                        <div className="row columns">
                            <label>Type
                                <SelectComponent
                                    options={this.getDeviceTypesAsSelectOptions(deviceTypes)}
                                    selectedValue={type}
                                    fieldName="type"
                                    onChange={this.props.onChange}/>
                            </label>
                        </div>
                        <div className="row columns">
                            <label>Brand
                                <SelectComponent
                                    options={this.getDeviceBrandsAsSelectOptions(deviceBrands)}
                                    selectedValue={brand}
                                    fieldName="brand"
                                    onChange={this.props.onChange}/>
                            </label>
                        </div>
                        <div className="row columns">
                            <label>Model
                                <input type="text" name="model"
                                       placeholder="Input model"
                                       value={model}
                                       onChange={this.props.onChange}/>
                            </label>
                        </div>
                        <div className="row columns">
                            <label>Date of manufacturing
                                <input type="date" name="dateOfManufacturing"
                                       placeholder="Input date of manufacturing"
                                       value={dateOfManufacturing}
                                       onChange={this.props.onChange}/>
                            </label>
                        </div>
                        <div className="row columns">
                            <label>Url
                                <input type="text" name="url"
                                       placeholder="Input url"
                                       value={url}
                                       onChange={this.props.onChange}/>
                            </label>
                        </div>
                        <div className="row">
                            <div className="medium-12 columns">
                                <div className="button-group float-right">
                                    <input type="submit" className="button"
                                           value={this.props.saving ? 'Saving...' : 'Save'}
                                           disabled={this.props.saving}
                                           onClick={this.props.onSave}/>
                                    <input type="button" className="button"
                                           value="Cancel" onClick={this.props.onCancel}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

DeviceForm.propTypes = {
    device: React.PropTypes.shape({
        id: React.PropTypes.number,
        title: React.PropTypes.string,
        type: React.PropTypes.number,
        model: React.PropTypes.string,
        brand: React.PropTypes.number,
        dateOfManufacturing: React.PropTypes.string,
        url: React.PropTypes.string
    }).isRequired,
    deviceTypes: PropTypes.array,
    deviceBrands: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

DeviceForm.defaultProps = {
    deviceTypes: [],
    deviceBrands: [],
    saving: false,
    device: {}
};

export default DeviceForm;