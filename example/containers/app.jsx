import React from 'react';
import UI from 'components/ui';

export default () => {
  return (
    <UI.Media
      left={<img src="//images.unsplash.com/photo-1443527216320-7e744084f5a7?fit=crop&fm=jpg&h=750&ixlib=rb-0.3.5&q=80&w=1300" width="64" height="64" />}
      body={<div><strong>Lorem</strong> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>}
      right={<img src="//images.unsplash.com/photo-1443527216320-7e744084f5a7?fit=crop&fm=jpg&h=750&ixlib=rb-0.3.5&q=80&w=1300" width="64" height="64" />}
    />
  );
};
