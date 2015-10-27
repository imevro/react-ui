import React, { Component, PropTypes } from 'react';
import Select from './select';
import { popArray } from 'dtutils';

class Range extends Component {
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
    };
  }

  componentWillMount() {
    this.formatOptions();
  }

  componentWillReceiveProps(props) {
    const { min, max } = props.value;

    this.setState({ min, max }, () => {
      this.formatOptions();
    });
  }

  formatOptions() {
    const { options } = this.props;

    this.setState({
      options: {
        min: popArray(options, (options.length - 1)),
        max: popArray(options, 0),
      },
    });
  }

  handleChange(ref, val) {
    const { reference } = this.props;

    this.setState({ [ref]: val }, () => {
      const { min, max } = this.state;

      this.props.handleChange(reference, { min, max });
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children &&
          <label className="label-heading">
            <strong>{this.props.children}</strong>
          </label>
        }
        <div className="clearfix">
          <Select className="Select-ranged" key="min" reference="min" value={this.state.min} clearable={false} searchable={false} handleChange={::this.handleChange} options={this.state.options.min} isOpen={this.props.isOpen} />
          <Select className="Select-ranged" key="max" reference="max" value={this.state.max} clearable={false} searchable={false} handleChange={::this.handleChange} options={this.state.options.max} isOpen={this.props.isOpen} />
        </div>
      </div>
    );
  }
}

export default Range;
