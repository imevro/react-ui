import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles[props.size]]: !!props.size,
    [styles[props.kind]]: !!props.kind,
    [styles.block]: !!props.block,
    [styles.ranged]: !!props.ranged,
  };

  return (
    <select {...props} className={cn(styles.formControl, styles.select, className, props.className)}>
      <option value="null" disabled selected className={styles.selectPlaceholder}>{props.placeholder}</option>
      {props.options.map(option =>
        <option value={option.value}>{option.label}</option>
      )}
    </select>
  );
};
