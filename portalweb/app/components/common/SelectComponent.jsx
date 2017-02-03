import React, {PropTypes} from 'react';

class SelectComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            options: this.props.options,
            selectedValue: this.props.selectedValue
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.options.length < nextProps.options.length) {
            this.setState({
                options: Object.assign({}, nextProps.options)
            })
        }
        if (this.props.selectedValue != nextProps.selectedValue) {
            this.setState({selectedValue: nextProps.selectedValue})
        }
    }

    render() {
        const {options} = this.state;
        return (
            <select value={this.state.selectedValue} onChange={this.props.onChange}>
                {options.map(option => {
                    return <option value={option.value}>{option.name}</option>
                })}
            </select>
        )
    }
}

SelectComponent.propTypes = {
    options: PropTypes.array.isRequired,
    selectedValue: PropTypes.string,
    onChange: PropTypes.func,
    fieldName: PropTypes.string.isRequired
};

export default SelectComponent;