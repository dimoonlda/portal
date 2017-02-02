import React, {PropTypes} from 'react';

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

    render() {
        let {title, type, model, brand, dateOfManufacturing, url} = this.state.device;
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
                                <input type="text" name="type"
                                       placeholder="Input type"
                                       value={type}
                                       onChange={this.props.onChange}/>
                            </label>
                        </div>
                        <div className="row columns">
                            <label>Brand
                                <input type="text" name="brand"
                                       placeholder="Input brand"
                                       value={brand}
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
    device: PropTypes.object.isRequired,
    deviceTypes: PropTypes.array,
    deviceBrands: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default DeviceForm;