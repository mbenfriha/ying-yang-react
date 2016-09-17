import React, { Component, PropTypes } from 'react';
import { autobind } from 'core-decorators';

import Grid from '../../components/Grid';

export default class TransactionForm extends Component {
  static propTypes = {
    action: PropTypes.func,
  };

  @autobind()
  onFieldKeyUp(e) {
    if (e.keyCode === 13) {
      this.submitForm();
    }
  }

  submitForm() {
    const { valueField, descField } = this.refs;
    const { action } = this.props;

    const value = parseFloat(valueField.value);
    const description = descField.value;

    if (value === 0 || isNaN(value) || description.length === 0) {
      return;
    }

    action({ value, description });

    valueField.value = descField.value = '';

    descField.focus();
  }

  render() {
    return (
      <Grid.Footer>
        <Grid.Row>
          <Grid.Cell header={false}>
            <input
              name="description"
              placeholder="Description"
              ref="descField"
              onKeyUp={this.onFieldKeyUp}
            />
          </Grid.Cell>
          <Grid.Cell header={false}>
            <input
              name="value"
              placeholder="Value"
              ref="valueField"
              onKeyUp={this.onFieldKeyUp}
              type="number"
              step="any"
            />
          </Grid.Cell>
        </Grid.Row>
      </Grid.Footer>
    );
  }
}
