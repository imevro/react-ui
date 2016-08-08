import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const className = {
    [styles.striped]: !!props.striped,
    [styles[props.kind]]: !!props.kind,
  };

  return (
    <tr {...props} className={cn(styles.row, className, props.className)}>
      {props.children}
    </tr>
  );
};
