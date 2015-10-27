import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles[props.size]]: !!props.size,
  };

  return (
    <div className={cn(styles.panel, className, props.className)}>
      {props.children}
    </div>
  );
};
