import React from 'react';
import UI from 'components/ui';

export default () => {
  return (
    <UI.Form.Container>
        <UI.Grid.Container>
          <UI.Grid.Row>
            <UI.Grid.Col xs="6" xsOffset="3" style={{ marginTop: `50px` }}>
              <UI.Form.Input block type="text" kind="primary" placeholder="Evgeniya"
                append={<UI.Icon icon="twitter" />}
                appendWidth="4rem"
                prepend={<UI.Icon icon="facebook" />}
                prependWidth="2rem"
              />
            </UI.Grid.Col>
          </UI.Grid.Row>
        </UI.Grid.Container>
    </UI.Form.Container>
  );
};
