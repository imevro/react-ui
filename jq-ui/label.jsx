import React, { Component, PropTypes } from 'react';
import 'styles/ui/label';

class Label extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <span {...this.props} className={`label ${this.props.className}`}>
        {this.props.children}
      </span>
    );
  }
}

export default Label;
