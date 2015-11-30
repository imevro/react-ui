import React from 'react';
import cn from 'classnames';

export default ( styles = {} ) => (props) => {
  return (
    <div className={cn(styles.right, props.className)}>
      {props.children}
    </div>
  );
};
