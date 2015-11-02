import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles.bordered]: !!props.bordered,
  };

  return (
    <td {...props} className={cn(styles.cell, className, props.className)}>
      {props.children}
    </td>
  );
};
