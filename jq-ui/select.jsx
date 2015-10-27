import React, { PropTypes, Component } from 'react';
import ReactSelect from 'react-select';

import 'styles/ui/select';

class Select extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
  }

  handleChange(value) {
    const { reference } = this.props;

    this.props.handleChange(reference, value);
  }

  render() {
    return (
      <ReactSelect {...this.props} onChange={::this.handleChange} />
    );
  }
}

export default Select;
