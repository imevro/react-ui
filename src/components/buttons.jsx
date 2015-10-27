import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles[props.kind]]: !!props.kind,
    [styles[props.size]]: !!props.size,
    [styles.block]: !!props.block,
    [styles.active]: !!props.active,
  };

  return (
    <button {...props} className={cn(styles.btn, className, props.className)}>
      {props.children}
    </button>
  );
};
