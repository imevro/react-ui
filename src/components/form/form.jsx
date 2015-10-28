import React from 'react';

export default styles => props => {
  return (
    <form {...props} className={styles.form}>
      {props.children}
    </form>
  );
};
