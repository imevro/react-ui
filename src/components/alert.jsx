import React, { PropTypes } from 'react';
import cn from 'classnames';

export default function(props) {
  return <div>{props.children}</div>
}

// export default (props) => {
//   return (
//     <UI.Panel className={cn(`alert-panel`, this.props.className)}>
//       <div className="alert-panel-body">
//         <h3 className="alert-panel-body-text">{this.props.message}</h3>
//
//         {this.props.children}
//       </div>
//     </UI.Panel>
//   )
// }
