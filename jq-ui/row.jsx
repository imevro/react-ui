import React, { Component } from 'react';
import cn from 'classnames';

class Row extends Component {
  render() {
    return (
      <div {...this.props} className={cn(`row`, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default Row;
