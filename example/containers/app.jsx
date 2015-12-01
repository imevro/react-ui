import React from 'react';
import UI from 'components/ui';

export default () => {
  return (
    <UI.Pager current={0}
    total={20}
    visiblePages={5}
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
