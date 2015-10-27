import React, { PropTypes } from 'react';
import cn from 'classnames';
import UI from './index';
import 'styles/ui/alert';

class Alert extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  render() {
    return (
      <UI.Panel className={cn(`alert-panel`, this.props.className)}>
        <div className="alert-panel-body">
          <h3 className="alert-panel-body-text">{this.props.message}</h3>

          {this.props.children}
        </div>
      </UI.Panel>
    );
  }
}

export default Alert;
