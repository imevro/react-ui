import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import 'styles/ui/panel';

class Panel extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    bsSize: PropTypes.string,
  }

  render() {
    return (
      <div {...this.props} className={cn(`panel`, this.props.className, this.props.bsSize ? `panel-${this.props.bsSize}` : false)}>
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
