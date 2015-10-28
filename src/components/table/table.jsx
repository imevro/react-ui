import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const responsive = {
    [styles.responsive]: !!styles.responsive,
  };

  const className = {
    [styles.bordered]: !!props.bordered,
  };

  if (responsive) {
    return (
      <div className={styles.responsive}>
        <table {...props} className={cn(styles.table, className)}>
          <tbody>
            {props.children}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <table {...props} className={cn(styles.table, className)}>
        <tbody>
          {props.children}
        </tbody>
      </table>
    );
  }
};
