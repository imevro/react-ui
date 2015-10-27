import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import 'styles/ui/type';

class Header extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    const className = cn(`heading-brand`, this.props.className);

    return <h5 className={className}>{this.props.children}</h5>;
  }
}

export default Header;
