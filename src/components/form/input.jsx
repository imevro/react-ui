import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const block = {
    [styles.block]: !!props.block,
  };

  const className = {
    [styles[props.kind]]: !!props.kind,
    [styles.block]: !!props.block,
  };

  return (
    <div className={cn(styles.inputWrapper, block)}>
      {props.prepend &&
        <div className={styles.prepend}>
          {props.prepend}
        </div>
      }

      <input {...props} className={cn(styles.formControl, className, props.className)} />

      {props.append &&
        <div className={styles.append}>
          {props.append}
        </div>
      }
    </div>
  );
};
