import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput';

import cn from 'classnames';
import 'styles/ui/form/input';

class Input extends Component {
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
    const className = {
      [`form-control-` + this.props.size]: !!this.props.size,
      [`form-control-` + this.props.kind]: !!this.props.kind,
      [`form-control-block`]: !!this.props.block,
    };

    if (!this.props.pattern) {
      return <input {...this.props} className={cn(`form-control`, className, this.props.className)} />;
    } else {
      return <MaskedInput {...this.props} className={cn(`form-control`, className, this.props.className)} onChange={::this.onChange} />;
    }
  }
}

export default Input;
