import React, { Component } from 'react';
import cn from 'classnames';

export default styles => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loading: false,
      };
    }

    componentWillMount() {
      this.timeoutId = setTimeout(() => {
        this.setState({ loading: true });
      }, 300);
    }

    componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }

    render() {
      const className = {
        [styles.active]: !!this.state.loading,
      };

      return (
        <div {...this.props} className={cn(styles.loading, className, this.props.className)}>
          <div className={styles.element}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
          </div>
        </div>
      );
    }
  };
};
