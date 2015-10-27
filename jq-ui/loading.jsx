import React, { Component } from 'react';
import cn from 'classnames';

import UI from './index';

import 'styles/ui/loading';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
    };
  }

  componentWillMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: true });
    }, 300);

    this.errorTimeoutId = setTimeout(() => {
      this.setState({ error: true });
    }, 15000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    clearTimeout(this.errorTimeoutId);
  }

  render() {
    if (this.state.error) {
      return <UI.Alert message="Timeout" />;
    } else {
      return (
        <div className={cn(`loading`, this.state.loading ? `active` : null)}>
          <div className="loading-element">
            <div className="loading-element-item"></div>
            <div className="loading-element-item"></div>
            <div className="loading-element-item"></div>
          </div>
        </div>
      );
    }
  }
}

export default Loading;
