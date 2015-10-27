import React, { PropTypes } from 'react';
import { Select } from './select';
import { popArray } from 'dtutils';

class Range extends React.Component {
  static propTypes = {
    value: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    reference: PropTypes.string.isRequired,
    children: PropTypes.node,
    handleChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const { min, max } = props.value;

    this.state = {
      min,
      max,
      options: {},

      isOpen: false,
    };
  }

  componentWillMount() {
    const options = {
      min: popArray(this.props.options, (this.props.options.length - 1)),
      max: popArray(this.props.options, 0),
    };

    this.setState({ options });
  }

  handleChange(refer, val) {
    const ref = this.props.reference;

    this.setState({ [refer]: val }, () => {
      const { min, max } = this.state;

      this.props.handleChange(ref, { min, max });
    });
  }

  render() {
    return (
      <div className="form-group">
        <label className="label-heading">
          <strong>{this.props.children}</strong>
        </label>

        <div className="clearfix">
          <Select {...this.props} className="Select-ranged" key="min" reference="min" value={this.state.min} clearable={false} searchable={false} handleChange={this.handleChange.bind(this)} options={this.state.options.min} />
          <Select {...this.props} className="Select-ranged" key="max" reference="max" value={this.state.max} clearable={false} searchable={false} handleChange={this.handleChange.bind(this)} options={this.state.options.max}/>
        </div>
      </div>
    );
  }
}

export default Range;
