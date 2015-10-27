import React, { PropTypes } from 'react';

class Row extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <div {...this.props} className={`row ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Row;
