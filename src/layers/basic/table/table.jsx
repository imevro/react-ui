import React from 'react';
import cn from 'classnames';

export default (styles = {}) => props => {
  const responsive = {
    [styles.responsive]: !!props.responsive,
  };

  const className = {
    [styles.bordered]: !!props.bordered,
  };

  if (props.responsive) {
    return (
      <div className={cn(responsive)}>
        <table {...props} className={cn(styles.table, className, props.className)}>
          <tbody>
            {props.children}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <table {...props} className={cn(styles.table, className, props.className)}>
        <tbody>
          {props.children}
        </tbody>
      </table>
    );
  }
};
