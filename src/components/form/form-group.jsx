import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const className = {
    [styles[props.size]]: !!props.size,
    [styles[`form-` + props.kind]]: !!props.kind,
    [styles.inline]: !!props.inline,
    [styles.horizontal]: !!props.horizontal,
  };

  return (
    <div {...props} className={cn(styles.group, className, props.className)}>
      {props.children}
    </div>
  );
};
