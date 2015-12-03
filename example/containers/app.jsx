import React from 'react';
import UI from 'components/ui';

export default () => {
  return (
    <UI.Navbar>
      <UI.Menu left>
        <UI.Brand>Brand</UI.Brand>
        <UI.Link to="#">Link 2</UI.Link>
        <UI.Link to="#">Link 2</UI.Link>
        <UI.Link to="#">Link 2</UI.Link>
      </UI.Menu>
      <UI.Menu right>
        <UI.Static>Signed in</UI.Static>
      </UI.Menu>
    </UI.Navbar>
  );
};
