import React, { PropTypes } from 'react';
import UI from '../ui/index';

class NotFound extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  render() {
    return (
      <UI.Panel className="alert-panel">
        <div className="alert-panel-body">
          <h3 className="alert-panel-body-text">{this.props.message}</h3>

          {this.props.children}
        </div>
      </UI.Panel>
    );
  }
}

export default NotFound;
