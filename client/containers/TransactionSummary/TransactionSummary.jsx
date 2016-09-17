import React, { Component, PropTypes } from 'react';
import Grid from '../../components/Grid';

const { string, shape, arrayOf, object } = PropTypes;

export default class TransactionSummary extends Component {
  static propTypes = {
    fields: arrayOf(shape({
      mapping: string,
      className: string
    })).isRequired,
    data: object,
  };

  render() {
    const { fields, data } = this.props;

    return (
      <Grid.Footer>
        <Grid.Row>
          {
            fields.map(({ mapping, className }, index) => (
              <Grid.Cell
                text={data[mapping]}
                className={className}
                key={`tf${index}`}
              />
            ))
          }
        </Grid.Row>
      </Grid.Footer>
    );
  }
}
