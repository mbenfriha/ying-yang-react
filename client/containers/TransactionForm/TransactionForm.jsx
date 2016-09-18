import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { ifElse, anyPass, propSatisfies, curry, F } from 'ramda';

const { func } = PropTypes;

const submitForm = (action) =>
  ifElse(
    anyPass([
      propSatisfies(x => x.length === 0, 'description'),
      propSatisfies(x => x === 0, 'value'),
      propSatisfies(isNaN, 'value'),
    ]),
    F,
    curry(action),
  );

const TransactionForm = reduxForm({ form: 'TRANSACTION_FORM' })(({ action, handleSubmit }) =>
  <div>
    <form onSubmit={handleSubmit(fields => submitForm(action)(fields))}>
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
