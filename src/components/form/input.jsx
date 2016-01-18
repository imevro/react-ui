import React from 'react';
import MaskedInput from 'react-maskedinput';
import cn from 'classnames';

export default (styles = {}) => props => {
  const className = {
    [styles[props.kind]]: !!props.kind,
    [styles.block]: !!props.block,
    [styles[props.type]]: !!props.type,
  };

  if (props.mask) {
    return <MaskedInput {...props} className={cn(styles.formControl, className, props.className)} />;
  } else {
    return <input {...props} className={cn(styles.formControl, className, props.className)} />;
  }
};
