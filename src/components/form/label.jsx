import React from 'react';

export default styles => props => {
  return (
    <label className={styles.label}>
      {props.children}
    </label>
  );
};
