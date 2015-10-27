import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles[props.kind]]: !!props.kind,
  };
  return (
    <span {...props} className={cn(styles.badge, className, props.className)}>
      {props.children}
    </span>
  );
};
