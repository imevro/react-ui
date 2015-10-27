import React from 'react';

export default styles => props => {
  return (
    <button className={styles.btn} {...props}>{props.children}</button>
  );
};
