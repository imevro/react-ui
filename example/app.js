import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from 'containers/app';

import ReactUI from 'react-ui';
// Custom
import styles from 'styles';
import UIComponents from 'components/ui';

export const UI = ReactUI({
  styles,
  components: UIComponents(styles),
});

ReactDOM.render((
  <AppContainer />
), document.getElementById(`app`));
