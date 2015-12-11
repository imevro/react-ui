import React from 'react';
import MaskedInput from 'react-maskedinput';
import cn from 'classnames';

export default (styles = {}) => props => {
  const className = {
    [styles[props.kind]]: !!props.kind,
    [styles.block]: !!props.block,
  };

  const input = props.mask ? <MaskedInput {...props} className={cn(styles.formControl, className, props.className)} /> : <input {...props} className={cn(styles.formControl, className, props.className)} />;
  return input;
};
