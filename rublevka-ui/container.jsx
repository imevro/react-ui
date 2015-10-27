import React, { Component, PropTypes } from 'react';
import cs from 'classnames';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    const className = cs(`container`, this.props.className);

    return (
      <div {...this.props} className={className}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
