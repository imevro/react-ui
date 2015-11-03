import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  return (
    <form {...props} className={cn(styles.form, props.className)}>
      {props.children}
    </form>
  );
};
