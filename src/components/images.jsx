import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles[props.kind]]: !!props.kind,
    [styles.responsive]: !!props.responsive,
  };

  return (
    <img {...props} className={cn(styles.img, className, props.className)} />
  );
};
