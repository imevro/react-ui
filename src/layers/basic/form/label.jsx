import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const className = {
    [styles.block]: !!props.block,
  };

  return (
    <label {...props} className={cn(styles.label, className, props.className)}>
      {props.children}
    </label>
  );
};
