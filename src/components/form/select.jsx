import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const block = {
    [styles.block]: !!props.block,
  };

  const className = {
    [styles[props.size]]: !!props.size,
    [styles[props.kind]]: !!props.kind,
    [styles.ranged]: !!props.ranged,
  };

  return (
    <div className={cn(styles.selectWrapper, block)}>
      <select {...props} defaultValue="null" className={cn(styles.formControl, styles.select, className, props.className)}>
        <option value="null" className={styles.selectPlaceholder}>{props.placeholder}</option>

        {props.options.map((option, index) =>
          <option value={option.value} key={index}>{option.label}</option>
        )}
      </select>
    </div>
  );
};
