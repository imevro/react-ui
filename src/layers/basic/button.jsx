import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

export default (styles = {}) => props => {
  const className = {
    [styles[props.kind]]: !!props.kind,
    [styles[props.size]]: !!props.size,
    [styles.block]: !!props.block,
    [styles.active]: !!props.active,
  };

  if (props.to) {
    return (
      <Link {...props} className={cn(styles.btn, className, props.className)}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button {...props} className={cn(styles.btn, className, props.className)}>
        {props.children}
      </button>
    );
  }
};
