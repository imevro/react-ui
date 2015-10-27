import React, { Component } from 'react';
import cn from 'classnames';

import styles from 'styles/ui/form-group';

class FormGroup extends Component {
  render() {
    return (
      <div {...this.props} className={cn(styles.formGroup, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default FormGroup;
