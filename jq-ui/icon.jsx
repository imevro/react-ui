import React, { Component, PropTypes } from 'react';

class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    return (
      <svg className={this.props.className} dangerouslySetInnerHTML={{__html: `<use xlink:href="#dt-icons-${this.props.icon}" />`}}></svg>
    );
  }
}

export default Icon;
