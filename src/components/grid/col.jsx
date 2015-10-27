import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const { xs, sm, md, lg } = props;

  const className = {
    [styles[`xs-${xs}`]]: !!xs,
    [styles[`sm-${sm}`]]: !!sm,
    [styles[`md-${md}`]]: !!md,
    [styles[`lg-${lg}`]]: !!lg,
  };

  return (
    <div className={cn(className)}>
      {props.children}
    </div>
  );
};
