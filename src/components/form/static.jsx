import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  return (
    <p className={cn(styles.static, props.className)}>
      {props.children}
    </p>
  );
};
