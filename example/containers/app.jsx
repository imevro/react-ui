import React from 'react';
import UI from 'components/ui';

export default () => {
  return (
    <UI.Container fluid>
      <UI.Row>
        <UI.Col xs="12" sm="6" md="4" lg="3">
          first
        </UI.Col>
        <UI.Col xs="12" sm="6" md="4" lg="3">
          second
        </UI.Col>
        <UI.Col xs="12" sm="6" md="4" lg="3">
          third
        </UI.Col>
        <UI.Col xs="12" sm="6" md="4" lg="3">
          fourth
        </UI.Col>
      </UI.Row>
      <UI.Row>
        <UI.Col xs="12" sm="6" md="4">
          first
        </UI.Col>
        <UI.Col xs="12" sm="6" md="4">
          second
        </UI.Col>
        <UI.Col xs="12" sm="6" md="4">
          third
        </UI.Col>
      </UI.Row>
    </UI.Container>
  );
};
