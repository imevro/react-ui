import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const className = {
    [styles.fixed]: !!props.fixed,
  };

  return (
    <nav className={cn(styles.navbar, className, props.className)}>
      {props.children}
    </nav>
  );
};
