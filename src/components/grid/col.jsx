import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const {
    xs, xsOffset,
    sm, smOffset,
    md, mdOffset,
    lg, lgOffset,
  } = props;

  const className = {
    [styles[`xs-${xs}`]]: !!xs,
    [styles[`xs-offset-${xsOffset}`]]: !!xsOffset,
    [styles[`sm-${sm}`]]: !!sm,
    [styles[`sm-offset-${smOffset}`]]: !!smOffset,
    [styles[`md-${md}`]]: !!md,
    [styles[`md-offset-${mdOffset}`]]: !!mdOffset,
    [styles[`lg-${lg}`]]: !!lg,
    [styles[`lg-offset-${lgOffset}`]]: !!lgOffset,
  };

  return (
    <div {...props} className={cn(className, props.className)}>
      {props.children}
    </div>
  );
};
