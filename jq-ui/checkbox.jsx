import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

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

  state = {
    checked: this.props.value,
  }

  handleChange(e) {
    const ref = this.props.reference;
    const value = e.target.checked;

    this.props.handleChange(ref, value);

    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <div className={cn(`checkbox`, { active: this.state.checked })}>
        {JSON.stringify(this.props.value)}
        <label className="checkbox-label">
          <input className="checkbox-control" type="checkbox" defaultChecked={this.props.value} ref={this.props.reference} onChange={::this.handleChange} /> &nbsp;
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default Checkbox;
