import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

import 'styles/ui/navbar';

class Navbar extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const className = {
      'navbar': !this.props.kind,
      [`navbar-` + this.props.kind]: !!this.props.kind,
      [`navbar-` + this.props.fixed]: !!this.props.fixed,
    };

    return (
      <div {...this.props} className={cn(className, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default Navbar;
