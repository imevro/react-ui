import React, { Component } from 'react';
import UI from 'components/ui';

import styles from 'styles/ui/slider';

class Slider extends Component {
  render() {
    return (
      <div>
        <UI.Row>
          <div className={styles.range}>
            <div className={styles.scale}></div>
            <div className={styles.bar}></div>
            <button className={styles.control}></button>
            <button className={styles.control}></button>
          </div>
        </UI.Row>
        <UI.Row className={styles.valueWrapper}>
          <div className={styles.left}>
            <span className={styles.value}>500 000</span>
          </div>
          <div className={styles.right}>
            <span className={styles.value}>1 300 000</span>
          </div>
        </UI.Row>
      </div>
    );
  }
}

export default Slider;
