import React, { PropTypes } from 'react';

class Label extends React.Component {
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
