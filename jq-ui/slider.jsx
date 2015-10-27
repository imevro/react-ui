/* eslint no-nested-ternary: 0 */
import React, { Component } from 'react';
import ReactSlider from 'react-slider';
// import { FormattedCurrency } from 'react-formatted';
import cn from 'classnames';

import 'styles/ui/slider';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      value: props.defaultValue,
    };
  }

  handleChange(val) {
    const [min, max] = val;
    const value = { min, max };

    this.setState({ value });
  }

  handleAfterChange() {
    const { transform } = this.props;
    const { value } = this.state;

    const min = transform ? transform(value.min) : value.min;
    // FIXME
    const max = (value.max === this.state.max) ? `max` : transform ? transform(value.max) : value.max;

    this.props.handleChange(this.props.reference, { min, max });
  }

  render() {
    const { step, valueFormat } = this.props;
    const { value, min, max } = this.state;

    return (
      <div>
        <div className="slider-handle-title" key="min">
          {valueFormat.prefix}
          {value.min}
          &nbsp;{valueFormat.postfix}
        </div>
        <ReactSlider step={step} defaultValue={[ value.min, value.max ]} min={min} max={max} className={cn(`slider`, this.props.className)} barClassName="slider-bar" handleClassName="slider-handle" onChange={::this.handleChange} onAfterChange={::this.handleAfterChange} pearling withBars />
        <div className="slider-handle-title" key="max">
          {valueFormat.prefix}
          {value.max === max ? valueFormat.max : value.max}
          &nbsp;{valueFormat.postfix}
        </div>
      </div>
    );
  }
}

export default Slider;
