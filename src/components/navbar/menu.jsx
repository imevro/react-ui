import React from 'react';
import cn from 'classnames';

export default (styles = {}) => (props) => {
  const className = {
    [styles.left]: !!props.left,
    [styles.right]: !!props.right,
  };

  return (
    <div className={cn(className, styles.className)}>
      {props.children}
    </div>
  );
};
