import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = props.fluid ? styles.containerFluid : styles.container;

  return (
    <div className={cn(className, props.className)}>
      {props.children}
    </div>
  );
};
