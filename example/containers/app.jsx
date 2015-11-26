import React from 'react';
import UI from 'components/ui';

export default () => {
  return (
    <UI.BtnGroup>
      <UI.Button type="button" kind="primary" size="sm">Click</UI.Button>
      <UI.Button type="button" kind="primary" size="sm">Click again</UI.Button>
      <UI.Button kind="danger" size="sm" to="#">Anchor</UI.Button>
      <UI.Button type="button" kind="success" size="sm">Click again</UI.Button>
      <UI.Button type="button" kind="primary" size="sm">One more</UI.Button>
      <UI.Button type="button" kind="default" size="sm">One more</UI.Button>
      <UI.Button type="button" size="sm">One more</UI.Button>
    </UI.BtnGroup>
  );
};
