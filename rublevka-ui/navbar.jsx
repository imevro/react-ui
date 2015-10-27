import React, { PropTypes } from 'react';

class Navbar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <div {...this.props} className={`navbar ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Navbar;
