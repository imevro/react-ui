import React from 'react';
import MaskedInput from 'react-maskedinput';
import cn from 'classnames';

export default (styles = {}) => props => {
  const className = {
    [styles[props.kind]]: !!props.kind,
    [styles.block]: !!props.block,
    [styles[props.type]]: !!props.type,
  };

  const input = props.mask ? <MaskedInput {...props} className={cn(styles.formControl, className, props.className, { [styles.valueClassName]: !!props.value }) } /> : <input {...props} className={cn(styles.formControl, className, props.className, { [styles.valueClassName]: !!props.value })} />;
  return input;
};
