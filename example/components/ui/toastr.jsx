import React from 'react';
import cn from 'classnames';

export default (styles = {}) => (props) => {
  const className = {
    [styles[props.kind]]: !!props.kind,
  };

  return (
    <div {...props} className={cn(styles.container, className, props.className)}>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.body}>{props.body}</p>
    </div>
  );
};
