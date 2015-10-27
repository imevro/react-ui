import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from 'containers/app';

import ReactUI from 'react-ui';
import styles from 'styles';

export const UI = ReactUI(styles);

ReactDOM.render((
  <AppContainer />
), document.getElementById(`app`));
