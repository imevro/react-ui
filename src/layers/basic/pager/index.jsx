/**
 * # Stateless Pager component
 *
 * ## Usage
 * ```
 * <Pager current={3}
 *    total={20}
 *    visiblePages={5}
 *    onPageChanged={this.handlePageChanged}
 *    titles={{
 *      first:   "First",
 *      prev:  "Prev",
 *      prevSet: "<<<",
 *      nextSet: ">>>",
 *      next:  "Next",
 *      last:  "Last"
 *    }} />
 * ```
 *
 * ## How it looks like
 * ```
 * First | Prev | ... | 6 | 7 | 8 | 9 | ... | Next | Last
 * ```
 *
 */

import React, { Component } from 'react';
import Page from './page';

/**
 * ## Constants
 */
const BASE_SHIFT = 0;
const TITLE_SHIFT = 1;
const TITLES = {
  first: `First`,
  prev: `\u00AB`,
  prevSet: `...`,
  nextSet: `...`,
  next: `\u00BB`,
  last: `Last`,
};

function range(start, end) {
  const res = [];

  for (let i = start; i < end; i++) {
    res.push(i);
  }

  return res;
}

export default (styles = {}) => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    handleFirstPage() {
      if (this.isPrevDisabled()) return;
      this.handlePageChanged(BASE_SHIFT);
    }

    handlePreviousPage() {
      if (this.isPrevDisabled()) return;
      this.handlePageChanged(this.props.current - TITLE_SHIFT);
    }

    handleNextPage() {
      if (this.isNextDisabled()) return;
      this.handlePageChanged(this.props.current + TITLE_SHIFT);
    }

    handleLastPage() {
      if (this.isNextDisabled()) return;
      this.handlePageChanged(this.props.total - TITLE_SHIFT);
    }

    handleMorePrevPages() {
      const blocks = this.calcBlocks();
      this.handlePageChanged(blocks.current * blocks.size - TITLE_SHIFT);
    }

    handleMoreNextPages() {
      const blocks = this.calcBlocks();
      this.handlePageChanged((blocks.current + TITLE_SHIFT) * blocks.size);
    }

    handlePageChanged(el) {
      const handler = this.props.onPageChanged;

      if (handler) handler(el);
    }


    calcBlocks() {
      const { total, visiblePages } = this.props;
      const current = this.props.current + TITLE_SHIFT;
      const blockSize = visiblePages;
      const blocks = Math.ceil(total / blockSize);
      const currentBlock = Math.ceil(current / blockSize) - TITLE_SHIFT;

      return {
        total: blocks,
        current: currentBlock,
        size: blockSize,
      };
    }

    isPrevDisabled() {
      return this.props.current <= BASE_SHIFT;
    }

    isNextDisabled() {
      return this.props.current >= (this.props.total - TITLE_SHIFT);
    }

    isPrevMoreHidden() {
      const blocks = this.calcBlocks();

      return (blocks.total === TITLE_SHIFT) || (blocks.current === BASE_SHIFT);
    }

    isNextMoreHidden() {
      const blocks = this.calcBlocks();
      return (blocks.total === TITLE_SHIFT) || (blocks.current === (blocks.total - TITLE_SHIFT));
    }

    visibleRange() {
      const blocks = this.calcBlocks();
      const start = blocks.current * blocks.size;
      const delta = this.props.total - start;
      const end = start + ((delta > blocks.size) ? blocks.size : delta);

      return [start + TITLE_SHIFT, end + TITLE_SHIFT];
    }

    getTitles(key) {
      const { titles = {} } = this.props;

      return titles[key] || TITLES[key];
    }

    renderPages([first, second]) {
      return range(first, second).map((el, idx) => {
        const current = el - TITLE_SHIFT;

        const onClick = this.handlePageChanged.bind(null, current);
        const isActive = (this.props.current === current);

        return <Page styles={styles} key={idx} isActive={isActive} className={styles.btn} onClick={onClick}>{el}</Page>;
      });
    }

    render() {
      return (
        <nav className={styles.navigation}>
          <Page styles={styles} className={styles.btn}
            key="pagination-first-page"
            isDisabled={this.isPrevDisabled()}
            onClick={this.handleFirstPage}>{::this.getTitles(`first`)}</Page>

          <Page styles={styles} className={styles.btn}
            key="pagination-prev-page"
            isDisabled={this.isPrevDisabled()}
            onClick={this.handlePreviousPage}>{::this.getTitles(`prev`)}</Page>

          <Page styles={styles} className={styles.btn}
            key="pagination-prev-more"
            isHidden={this.isPrevMoreHidden()}
            onClick={this.handleMorePrevPages}>{::this.getTitles(`prevSet`)}</Page>

          {this.renderPages(this.visibleRange())}

          <Page styles={styles} className={styles.btn}
            key="pagination-next-more"
            isHidden={this.isNextMoreHidden()}
            onClick={this.handleMoreNextPages}>{::this.getTitles(`nextSet`)}</Page>

          <Page styles={styles} className={styles.btn}
            key="pagination-next-page"
            isDisabled={this.isNextDisabled()}
            onClick={this.handleNextPage}>{::this.getTitles(`next`)}</Page>

          <Page styles={styles} className={styles.btn}
            key="pagination-last-page"
            isDisabled={this.isNextDisabled()}
            onClick={this.handleLastPage}>{::this.getTitles(`last`)}</Page>
        </nav>
     );
    }
  };
};
