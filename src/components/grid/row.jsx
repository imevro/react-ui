import React from 'react';

export default styles => props => {
  return (
    <div className={styles.row}>
      {props.children}
    </div>
  );
};
