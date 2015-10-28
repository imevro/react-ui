import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles.striped]: !!props.striped,
  };

  return (
    <tr {...props} className={cn(styles.row, className)}>
      {props.children}
    </tr>
  );
};
