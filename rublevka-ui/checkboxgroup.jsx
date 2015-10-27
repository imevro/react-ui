import React, { PropTypes } from 'react';
import UI from '../ui';

class CheckboxGroup extends React.Component {
  static propTypes = {
    // value: PropTypes.isRequired,
    reference: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    handleChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      items: props.items,
    };
  }

  handleChange(key, val) {
    const ref = this.props.reference;
    const value = this.state.selected;

    // FIXME: trash
    if (val) {
      const selected = this.state.selected;

      selected.push(key);

      this.setState({ selected });
    } else {
      const selected = this.state.selected;
      const indexed = selected.indexOf(key);

      if (indexed > -1) {
        selected.splice(indexed, 1);
      }

      this.setState({ selected });
    }

    this.props.handleChange(ref, value);
  }

  render() {
    return (
      <div className="form-group">
        <label className="label-heading">
          <strong>{this.props.children}</strong>
        </label>

        <UI.Row>
          {this.state.items.map(item =>
            <div className="col-xs-6" key={item.value}>
              <UI.Checkbox handleChange={::this.handleChange} reference={item.value} defaultChecked={item.checked}>
                {item.label}
              </UI.Checkbox>
            </div>
          )}
        </UI.Row>
      </div>
    );
  }
}

export default CheckboxGroup;
