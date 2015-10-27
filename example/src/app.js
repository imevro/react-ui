import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'containers/app';
import ReactUI from 'react-ui';
import GorodStyles from 'styles';

const GorodUI = ReactUI(GorodStyles);
// const GorodUI = ReactUI;

ReactDOM.render((
  <AppContainer>
    <GorodUI.Alert message="test">A L E R T</GorodUI.Alert>
  </AppContainer>
), document.getElementById(`app`));
