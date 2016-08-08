import React from 'react';
import Form from 'react-auto-form';
import cn from 'classnames';

export default (styles = {}) => props => {
  return (
    <Form {...props} className={cn(styles.form, props.className)}>
      {props.children}
    </Form>
  );
};
