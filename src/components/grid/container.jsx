import React from 'react';

export default styles => props => {
  const className = props.fluid ? styles.containerFluid : styles.container;

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};
