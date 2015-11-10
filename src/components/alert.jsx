import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  return (
    <div {...props} className={cn(styles.panel, props.className)}>
      <div className={styles.body}>
        <h3 className={styles.title}>{props.message}</h3>
        {props.children}
      </div>
    </div>
  );
};
