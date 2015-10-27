import React from 'react';
import cn from 'classnames';

export default styles => props => {
  const className = {
    [styles[props.kind]]: !!props.kind,
    [styles[props.size]]: !!props.size,
    [styles.block]: !!props.block,
    [styles.active]: !!props.active,
  };

  return (
    <button {...props} className={cn(styles.btn, className, props.className)}>
      {props.children}
    </button>

  );
};


// import React, { Component } from 'react';
// import { Link } from 'react-router';
// import cn from 'classnames';
//
// import styles from 'styles/ui/button';
//
// class Button extends Component {
//   render() {
//     const className = {
//       [styles[this.props.kind]]: !!this.props.kind,
//       [styles[this.props.size]]: !!this.props.size,
//       [styles.block]: !!this.props.block,
//       [styles.active]: !!this.props.active,
//     };
//
//     if (this.props.to) {
//       return (
//         <Link {...this.props} className={cn(styles.btn, className, this.props.className)}>
//           {this.props.children}
//         </Link>
//       );
//     } else {
//       return (
//         <button {...this.props} className={cn(styles.btn, className, this.props.className)}>
//           {this.props.children}
//         </button>
//       );
//     }
//   }
// }
//
// export default Button;
