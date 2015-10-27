import React, { Component, PropTypes } from 'react';
import MaskedInput from 'react-maskedinput';

class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  onChange(e) {
    const { name, value } = e.target;
    const data = value;
    const change = {
      [name]: value,
    };

    if (this.props.onChange) {
      this.props.onChange(e, name, data, change);
    }
  }

  render() {
    return (
      <MaskedInput {...this.props} onChange={::this.onChange} />
    );
  }
}

export default Input;
