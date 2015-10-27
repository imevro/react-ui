import React, { Component } from 'react';
import cn from 'classnames';

import styles from 'styles/ui/form/select';

class SelectContainer extends Component {
  render() {
    const className = {
      [styles[this.props.size]]: !!this.props.size,
      [styles[this.props.kind]]: !!this.props.kind,
      [styles.block]: !!this.props.block,
      [styles.ranged]: !!this.props.ranged,
    };

    return (
      <select {...this.props} className={cn(styles.formControl, styles.select, className, this.props.className)}>
        <option value="null" disabled selected className={styles.selectPlaceholder}>{this.props.placeholder}</option>
        {this.props.options.map(option =>
          <option value={option.value}>{option.label}</option>
        )}
      </select>
    );
  }
}

export default SelectContainer;
