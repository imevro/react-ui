import React, { Component } from 'react';
import UI from 'components/ui';
import cn from 'classnames';

import 'styles/ui/dropdown';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.clickOutside = ::this.clickOutside;
  }

  componentDidUpdate(prevProps, prevStates) {
    if (prevStates.isOpen === this.state.isOpen) {
      return;
    }

    if (this.state.isOpen) {
      document.addEventListener(`click`, this.clickOutside);
    } else {
      document.removeEventListener(`click`, this.clickOutside);
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  clickOutside(event) {
    if (this.state.isOpen && !React.findDOMNode(this.refs.dropdown).contains(event.target)) {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }

  render() {
    return (
      <div ref="dropdown" className={cn(`dropdown`, this.props.className)}>
        <div className={cn(`dropdown-placeholder`, { active: this.props.isOpen || this.state.isOpen })} onClick={::this.toggle}>
          {this.props.placeholder}
          &nbsp;
          <UI.Icon className="dropdown-icon" icon="chevron-bold-down" />
        </div>

        <div className={cn(`dropdown-container`, { active: this.props.isOpen || this.state.isOpen })}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dropdown;
