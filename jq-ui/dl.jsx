import React, { Component, PropTypes } from 'react';
import { dictionary, values } from 'config/constants';
import 'styles/ui/type';

class DL extends Component {
  static propTypes = {
    value: PropTypes.any.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
  }

  renderValue(name, value, type) {
    switch (type) {
    case `boolean`: {
      return value ? <dd>есть</dd> : <dd>нет</dd>;
    }
    case `dictionary`: {
      return <dd>{dictionary[name][value]}</dd>;
    }
    case `dimension`: {
      return <dd>{value} {values[name].dimension}</dd>;
    }
    default: {
      return <dd>{value}</dd>;
    }
    }
  }

  render() {
    if (
      (this.props.value !== 0) &&
      (typeof this.props.value !== `undefined`) &&
      (this.props.value || this.props.type === `boolean`)
    ) {
      return (
        <dl className={`dl ${this.props.className}`}>
          <dt>{values[this.props.name].key}:</dt>
          {this.renderValue(this.props.name, this.props.value, this.props.type)}
        </dl>
      );
    } else {
      return null;
    }
  }
}

export default DL;
