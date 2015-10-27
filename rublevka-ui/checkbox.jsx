import React, { PropTypes } from 'react';

class Checkbox extends React.Component {
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
      <div className="checkbox">
        <label className="checkbox-label">
          <input className="checkbox-control" type="checkbox" defaultChecked={this.props.value} ref={this.props.reference} onChange={this.handleChange.bind(this)} /> &nbsp;
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default Checkbox;
