import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  return (
    <nav className={cn(styles.navbar, styles.className)}>
      {props.children}
    </nav>
  );
};
