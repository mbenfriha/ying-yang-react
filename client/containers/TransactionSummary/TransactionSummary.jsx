import React, { PropTypes } from 'react';
import Grid from '../../components/Grid';

const { string, number, shape, arrayOf, oneOfType, objectOf } = PropTypes;

const TransactionSummary = ({ fields, data }) => (
  <Grid.Footer>
    <Grid.Row>
      {
        fields.map(({ mapping, className }, index) =>
          <Grid.Cell text={data[mapping]} className={className} key={`tf${index}`} header={false} />
        )
      }
    </Grid.Row>
  </Grid.Footer>
);

TransactionSummary.propTypes = {
  fields: arrayOf(shape({
    mapping: string,
    className: string,
  })).isRequired,
  data: objectOf(oneOfType([number, string])),
};

export default TransactionSummary;
