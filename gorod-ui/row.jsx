import React, { Component } from 'react';
import cn from 'classnames';

import styles from 'styles/grid';

class Row extends Component {
  render() {
    return (
      <div {...this.props} className={cn(styles.row, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default Row;
