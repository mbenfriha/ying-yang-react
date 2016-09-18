import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { ifElse, anyPass, propSatisfies, curry, equals, isEmpty, isNil, F } from 'ramda';

const { func } = PropTypes;

const submitForm = action =>
  ifElse(
    anyPass([
      propSatisfies(anyPass([isNil, isEmpty]), 'description'),
      propSatisfies(anyPass([isNil, isNaN, equals(0)]), 'value'),
    ]),
    F,
    curry(action),
  );

const TransactionForm = reduxForm({ form: 'TRANSACTION_FORM' })(({ action, handleSubmit }) =>
  <div>
    <form onSubmit={handleSubmit(submitForm(action))}>
      <Field name="description" placeholder="Description" component="input" />
      <Field name="value" placeholder="Value" component="input" type="number" step="any" />
      <button type="submit">Submit</button>
    </form>
  </div>
);

TransactionForm.propTypes = {
  action: func,
  handleSubmit: func,
};

export default TransactionForm;
