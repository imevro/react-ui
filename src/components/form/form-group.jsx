import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles.inline]: !!props.inline,
  };

  return (
    <div className={cn(styles.group, className, props.className)}>
      {props.children}
    </div>
  );
};
