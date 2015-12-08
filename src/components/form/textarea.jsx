import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const className = {
    [styles[props.kind]]: !!props.kind,
    [styles.block]: !!props.block,
  };

  return (
    <textarea {...props} className={cn(styles.formControl, className, props.className)}>
      {props.children}
    </textarea>
  );
};
