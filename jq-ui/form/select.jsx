import React, { Component } from 'react';
import cn from 'classnames';
import 'styles/ui/form/select';

class Select extends Component {
  render() {
    const className = {
      [`form-control-` + this.props.size]: !!this.props.size,
      [`form-control-` + this.props.kind]: !!this.props.kind,
      [`form-control-block`]: !!this.props.block,
      [`form-control-select-ranged`]: !!this.props.ranged,
    };

    return (
      <select {...this.props} className={cn(`form-control`, `form-control-select`, className, this.props.className)}>
        <option value="null" disabled selected className="form-control-select-placeholder">{this.props.placeholder}</option>
        {this.props.options.map(option =>
          <option value={option.value}>{option.label}</option>
        )}
      </select>
    );
  }
}

export default Select;
