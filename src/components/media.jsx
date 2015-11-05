import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  return (
    <div className={cn(styles.media, props.className)}>
      <div className={styles.left}>
        {props.left}
      </div>
      <div className={styles.body}>
        {props.body}
      </div>
      <div className={styles.right}>
        {props.right}
      </div>
    </div>
  );
};
