import React, { Component } from 'react';
import cn from 'classnames';

import styles from 'styles/ui/btn-group';

class BtnGroup extends Component {
  render() {
    return (
      <div {...this.props} className={cn(styles.btnGroup, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default BtnGroup;
