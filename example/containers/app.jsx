import React from 'react';
import UI from 'components/ui';

export default () => {
  return (
    <UI.Pager current={3}
    total={10}
    visiblePages={4}
    // onPageChanged={this.handlePageChanged}
    titles={{
      first: `First`,
      prev: `Prev`,
      prevSet: `<<<`,
      nextSet: `>>>`,
      next: `Next`,
      last: `Last`,
    }} />
  );
};
