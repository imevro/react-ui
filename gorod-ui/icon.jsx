import React, { Component } from 'react';
import cn from 'classnames';

// import 'styles/ui/icon';

class Icon extends Component {
  render() {
    const className = {
      [`icon-` + this.props.kind]: !!this.props.kind,
    };

    return (
      <span{...this.props} className={cn(`icon`, className, this.props.className)}></span>
    );
  }
}

export default Icon;
