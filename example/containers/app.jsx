import React from 'react';
import UI from 'components/ui';

export default () => {
  return (
    <UI.Form.Container>
      <UI.Form.Group>
        <UI.Form.Label>label</UI.Form.Label>
        <UI.Form.Input size="xs" placeholder="Email" type="email" />
      </UI.Form.Group>
      <UI.Form.Group>
        <UI.Form.Label>label</UI.Form.Label>
        <UI.Form.Input size="sm" kind="default" placeholder="Email" type="email" />
      </UI.Form.Group>
      <UI.Form.Group>
        <UI.Form.Label>label</UI.Form.Label>
        <UI.Form.Input size="md" kind="primary" block placeholder="Email" type="email" />
      </UI.Form.Group>
      <UI.Form.Group>
        <UI.Form.Label>label</UI.Form.Label>
        <UI.Form.Input size="lg" kind="accent" placeholder="Email" type="email" />
      </UI.Form.Group>
      <UI.Form.Group>
        <UI.Form.Label>label</UI.Form.Label>
        <UI.Form.Input size="lg" kind="accent" placeholder="Email" type="email" />
        <UI.Form.Checkbox>checkbox</UI.Form.Checkbox>
        <UI.Form.Checkbox>checkbox</UI.Form.Checkbox>
        <UI.Form.Checkbox>checkbox</UI.Form.Checkbox>
      </UI.Form.Group>
      <UI.Button kind="primary" size="lg">button</UI.Button>
    </UI.Form.Container>
  );
};
