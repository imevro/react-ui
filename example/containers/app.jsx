import React from 'react';
import UI from 'components/ui';

export default () => {
  return (
    <UI.Form.Container>
        <UI.Grid.Container>
          <UI.Grid.Row>
            <UI.Grid.Col xs="6" xsOffset="3" style={{ marginTop: `50px` }}>
              <UI.Form.Input block type="text" kind="primary" placeholder="Evgeniya"
                append={<span>Icon</span>}
                prepend={<span>Icon</span>}
              />
            </UI.Grid.Col>
          </UI.Grid.Row>
        </UI.Grid.Container>
    </UI.Form.Container>
  );
};
