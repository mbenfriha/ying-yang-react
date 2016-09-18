import React, { PropTypes } from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';

const { func } = PropTypes;

const submitForm = ({ value, description }, action) => {
  if (value === 0 || isNaN(value) || description.length === 0) {
    return;
  }

  action({ value, description });
};

const TransactionForm = reduxForm({ form: 'TRANSACTION_FORM' })(({ action, handleSubmit }) =>
  <div>
    <form onSubmit={handleSubmit(fields => submitForm(fields, action))}>
      <Field name="description" placeholder="Description" component="input" />
      <Field name="value" placeholder="Value" component="input" type="number" step="any" />
      <button type="submit">Submit</button>
    </form>
  </div>
);

TransactionForm.propTypes = {
  action: func,
  ...propTypes,
};

export default TransactionForm;
