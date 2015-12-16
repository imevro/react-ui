import React from 'react';
import cn from 'classnames';

export default (styles = {}) => {
  return (props) => {
    const className = {
      [styles.inline]: !!props.inline,
    };

    return (
      <div {...props} className={cn(styles.radio, { active: props.value }, className, props.className)}>
        <label className={styles.radioLabel}>
          <input {...props} className={styles.radioControl} type="radio" /> &nbsp;
          {this.props.children}
        </label>
      </div>
    );
  };
};
