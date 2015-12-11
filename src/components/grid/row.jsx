import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const generate = size => cn(props[size].split(` `).map(cl => styles[`${size}-${cl}`]));
  const className = [
    props.xs && generate(`xs`),
    props.sm && generate(`sm`),
    props.md && generate(`md`),
    props.lg && generate(`lg`),
  ];

  return (
    <div {...props} className={cn(styles.row, className, props.className)}>
      {props.children}
    </div>
  );
};
