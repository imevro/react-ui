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
      return (
        <div className={cn(styles.checkbox, { active: this.props.value })}>
          {JSON.stringify(this.props.value)}
          <label className={styles.label}>
            <input className={styles.checkboxControl} type="checkbox" defaultChecked={this.props.value} ref={this.props.reference} onChange={::this.handleChange} /> &nbsp;
            {this.props.children}
          </label>
        </div>
      );
    }
  };
};
