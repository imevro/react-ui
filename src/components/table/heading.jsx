import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles.bordered]: !!props.bordered,
  };

  return (
    <th {...props} className={cn(styles.heading, className, props.className)}>
      {props.children}
    </th>
  );
};
