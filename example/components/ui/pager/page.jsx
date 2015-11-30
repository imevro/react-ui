import React, { Component } from 'react';
import cn from 'classnames';

export default class Page extends Component {
  render() {
    const { isHidden, isDisabled, isActive, onClick, children, key, styles } = this.props;

    if (isHidden) return null;

    const className = {
      [styles.disabled]: isDisabled,
      [styles.active]: isActive,
    };

    return (
      <button key={key} className={cn(className, this.props.className)} onClick={onClick}>
        {children}
      </button>
   );
  }
}
