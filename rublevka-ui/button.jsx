import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    bsStyle: PropTypes.string,
    bsSize: PropTypes.string,
  }

  render() {
    return (
      <button {...this.props} className={cn(`btn`, this.props.className, this.props.bsSize ? `btn-${this.props.bsSize}` : false, this.props.bsStyle ? `btn-${this.props.bsStyle}` : false )}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
