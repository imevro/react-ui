import React, { Component } from 'react';
import cn from 'classnames';

export default styles => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    handleChange(e) {
      const ref = this.props.reference;
      const value = e.target.checked;

      this.props.handleChange(ref, value);
    }

    render() {
      const className = {
        [styles.inline]: !!this.props.inline,
      };

      return (
        <div className={cn(styles.radio, { active: this.props.value }, className, this.props.className)}>
          {JSON.stringify(this.props.value)}
          <label className={styles.radioLabel}>
            <input className={styles.radioControl} type="radio" defaultChecked={this.props.value} ref={this.props.reference} onChange={::this.handleChange} /> &nbsp;
            {this.props.children}
          </label>
        </div>
      );
    }
  };
};
