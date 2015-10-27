import React, { Component } from 'react';
import cn from 'classnames';

import styles from 'styles/grid';

class Container extends Component {
  render() {
    const className = this.props.fluid ? styles.containerFluid : styles.container;

    return (
      <div {...this.props} className={cn(className, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
