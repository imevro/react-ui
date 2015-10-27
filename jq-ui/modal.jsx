import React, { Component, PropTypes } from 'react';
import Modal from 'react-f-ui-modal';
import UI from 'components/ui';
import 'react-f-ui-modal/styles/modal';
import 'styles/ui/modal';

class UIModal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <span>
        <span className={this.props.className} onClick={this.props.toggleModal}>{this.props.text}</span>

        <Modal active={this.props.isOpen} onClose={this.props.toggleModal} closeOnOuterClick>
          <div className="f-modal-close" onClick={this.props.toggleModal}>
            <UI.Icon icon="times" />
          </div>
          {this.props.children}
        </Modal>
      </span>
    );
  }
}

export default UIModal;
