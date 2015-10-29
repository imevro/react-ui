import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles[props.size]]: !!props.size,
    [styles.inline]: !!props.inline,
    [styles.horizontal]: !!props.horizontal,
  };

  return (
    <div className={cn(styles.group, className, props.className)}>
      {props.children}
    </div>
  );
};
