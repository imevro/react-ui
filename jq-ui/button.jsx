import React, { Component } from 'react';
import cn from 'classnames';
import 'styles/ui/button';

class Button extends Component {
  render() {
    const className = {
      [`btn-` + this.props.kind]: !!this.props.kind,
      [`btn-` + this.props.size]: !!this.props.size,
      [`btn-block`]: !!this.props.block,
    };

    return (
      <button {...this.props} className={cn(`btn`, className, this.props.className)}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;

// react 0.14
/*
import React from 'react';
import cn from 'classnames';
import 'styles/ui/button';

export default ({ kind, size, block, className, children, ...props}) => {
  const classNames = {
    [`btn-` + kind]: !!kind,
    [`btn-` + size]: !!size,
    [`btn-block`]: !!block,
  }

  return (
    <button {...props} className={cn(`btn`, classNames, className)}>
      {children}
    </button>
  )
}
*/
