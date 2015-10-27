import React, { Component, PropTypes } from 'react';

class Text extends Component {
  static propTypes = {
    truncate: PropTypes.number,
    children: PropTypes.node.isRequired,
  }

  render() {
    if (this.props.children) {
      const origin = this.props.children;
      const reduced = this.props.children.substr(0, this.props.truncate);

      if (this.props.truncate && (origin.length !== reduced.length)) {
        return (
          <span title={this.props.children}>
            {reduced}{this.props.ellipsis ? `…` : ``}
          </span>
        );
      } else {
        return <span>{this.props.children}</span>;
      }
    } else {
      return <span>{this.props.children}</span>;
    }
  }
}

export default Text;
