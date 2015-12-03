import React from 'react';
import cn from 'classnames';

export default ( styles = {} ) => (props) => {
  const className = {
    [styles[props.kind]]: !!props.kind,
  };

  return (
    <p className={cn(styles.static, className, props.className)}>
      {props.children}
    </p>
  );
};
