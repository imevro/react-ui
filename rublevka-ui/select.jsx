import React, { PropTypes } from 'react';
import ReactSelect from 'react-select';

export class Select extends React.Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = props;
  }

  handleChange(newValue) {
    const ref = this.state.reference;
    const value = newValue;

    this.props.handleChange(ref, value);
  }

  render() {
    return (
      <ReactSelect {...this.props} onChange={this.handleChange.bind(this)} />
    );
  }
}

// export class AsyncSelect extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = props;
//   }
//
//   handleChange(newValue, newState) {
//     const ref = this.state.reference;
//     const value = newState;
//
//     this.props.handleChange(ref, newState);
//   }
//
//   render() {
//     return (
//       <ReactSelect {...this.props} onChange={this.handleChange.bind(this)} />
//     )
//   }
// }
