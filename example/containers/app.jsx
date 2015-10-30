import React from 'react';
import UI from 'components/ui';

export default () => {
  return (
    <UI.Form.Container>
      <UI.Form.Group>
        <UI.Form.Label block>Label block, Input</UI.Form.Label>
        <UI.Form.Input inline placeholder="Email" type="email" />
      </UI.Form.Group>

      <UI.Form.Group size="xs">
        <UI.Form.Label>Input</UI.Form.Label>
        <UI.Form.Input kind="primary" placeholder="Email" type="email" />
      </UI.Form.Group>

      <UI.Form.Group size="sm">
        <UI.Form.Label>Input block</UI.Form.Label>
        <UI.Form.Input kind="primary" block placeholder="Email" type="email" />
      </UI.Form.Group>

      <UI.Form.Group size="lg" inline>
        <UI.Form.Label>Input formGroup inline</UI.Form.Label>
        <UI.Form.Input kind="accent" placeholder="Email" type="email" />
      </UI.Form.Group>

      <UI.Form.Group>
        <UI.Form.Label>Checkbox</UI.Form.Label>
        <UI.Form.Checkbox>checkbox</UI.Form.Checkbox>
        <UI.Form.Checkbox>checkbox</UI.Form.Checkbox>
        <UI.Form.Checkbox>checkbox</UI.Form.Checkbox>
      </UI.Form.Group>

      <UI.Form.Group>
        <UI.Form.Label>Radio</UI.Form.Label>
        <UI.Form.Radio>radio</UI.Form.Radio>
        <UI.Form.Radio>radio</UI.Form.Radio>
        <UI.Form.Radio>radio</UI.Form.Radio>
      </UI.Form.Group>

      <UI.Form.Group size="xs">
        <UI.Form.Label block>Textarea</UI.Form.Label>
        <UI.Form.Textarea kind="accent" rows="4" placeholder="Some text here" />
      </UI.Form.Group>

      <UI.Form.Group size="sm">
        <UI.Form.Label block>Select</UI.Form.Label>
        <UI.Form.Select kind="primary" placeholder="Select" options={[
          { value: `one`, label: `one` },
          { value: `two`, label: `two` },
          { value: `three`, label: `three` },
          { value: `four`, label: `four` },
          { value: `five`, label: `five` },
          { value: `six`, label: `six` },
        ]} />
      </UI.Form.Group>

      <UI.Form.Group size="lg">
        <UI.Form.Label block>Select</UI.Form.Label>
        <UI.Form.Select kind="primary" ranged placeholder="Select" options={[
          { value: `one`, label: `one` },
          { value: `two`, label: `two` },
          { value: `three`, label: `three` },
          { value: `four`, label: `four` },
          { value: `five`, label: `five` },
          { value: `six`, label: `six` },
        ]} />
        <UI.Form.Select kind="primary" ranged placeholder="Select" options={[
          { value: `one`, label: `one` },
          { value: `two`, label: `two` },
          { value: `three`, label: `three` },
          { value: `four`, label: `four` },
          { value: `five`, label: `five` },
          { value: `six`, label: `six` },
        ]} />
      </UI.Form.Group>

      <UI.Form.Group horizontal size="xs">
        <UI.Col md="2">
          <UI.Form.Label block>Horizontal</UI.Form.Label>
        </UI.Col>
        <UI.Col md="10">
          <UI.Form.Input block inline placeholder="Email" type="email" />
        </UI.Col>
      </UI.Form.Group>
      <UI.Form.Group horizontal size="sm">
        <UI.Col md="2">
          <UI.Form.Label block size="labelSm">Horizontal</UI.Form.Label>
        </UI.Col>
        <UI.Col md="10">
          <UI.Form.Input block inline placeholder="Email" type="email" />
        </UI.Col>
      </UI.Form.Group>
      <UI.Form.Group horizontal size="sm">
        <UI.Col md="2">
          <UI.Form.Label block>Horizontal</UI.Form.Label>
        </UI.Col>
        <UI.Col md="10">
          <UI.Form.Input block placeholder="Email" type="email" />
        </UI.Col>
      </UI.Form.Group>
      <UI.Form.Group horizontal size="lg">
        <UI.Col md="2">
          <UI.Form.Label block>Horizontal</UI.Form.Label>
        </UI.Col>
        <UI.Col md="10">
          <UI.Form.Input block placeholder="Email" type="email" />
        </UI.Col>
      </UI.Form.Group>
      <UI.Form.Group horizontal size="sm">
        <UI.Col md="4">
          <UI.Form.Label block>Horizontal</UI.Form.Label>
        </UI.Col>
        <UI.Col md="8">
          <UI.Form.Static>example@my.com</UI.Form.Static>
        </UI.Col>
      </UI.Form.Group>
      <UI.Form.Group horizontal size="lg">
        <UI.Col md="4">
          <UI.Form.Label block>Horizontal</UI.Form.Label>
        </UI.Col>
        <UI.Col md="8">
          <UI.Form.Static>example@my.com</UI.Form.Static>
        </UI.Col>
      </UI.Form.Group>

      <UI.Button block kind="primary" size="md">button</UI.Button>

    </UI.Form.Container>
  );
};
