import React, { Component } from 'react';
import cn from 'classnames';

class Container extends Component {
  render() {
    const className = this.props.fluid ? `container-fluid` : `container`;

    return (
      <div {...this.props} className={cn(className, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
