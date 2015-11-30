import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

export default ( styles = {} ) => (props) => {
  return (
    <Link {...props} className={cn(styles.brand, props.className)} to={props.to}>
      {props.children}
    </Link>
  );
};
