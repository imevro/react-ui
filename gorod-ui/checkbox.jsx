import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

import styles from 'styles/ui/checkbox';

class Checkbox extends Component {
  static propTypes = {
    value: PropTypes.bool,
    reference: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    handleChange: PropTypes.func.isRequired,
  }

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
          <input className={styles.control} type="checkbox" defaultChecked={this.props.value} ref={this.props.reference} onChange={::this.handleChange} /> &nbsp;
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default Checkbox;
