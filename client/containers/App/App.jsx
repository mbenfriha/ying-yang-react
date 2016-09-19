import React, { PropTypes } from 'react';
import functional from 'react-functional';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pick, path, pipe } from 'ramda';

import TopHeader from '../../components/TopHeader/TopHeader';
import Grid from '../../components/Grid';
import TransactionForm from '../TransactionForm/TransactionForm';
import TransactionSummary from '../TransactionSummary/TransactionSummary';
import * as AppActions from '../../actions';

const { arrayOf, shape, number, string, func } = PropTypes;

const App = ({ transactions, summary, transactionsGrid, actions }) => {
  const { addTransaction } = actions;

  return (
    <div className="viewport">
      <TopHeader />
      <Grid fields={transactionsGrid} data={transactions}>
        <TransactionSummary data={summary} fields={transactionsGrid} />
      </Grid>
      <TransactionForm action={addTransaction} />
    </div>
  );
};

App.componentWillMount = (({ transactions, actions: { requestSum } }) => requestSum(transactions));

App.propTypes = {
  transactions: arrayOf(shape({
    id: number.isRequired,
    description: string.isRequired,
    value: number.isRequired,
  })),
  summary: shape({
    description: string.isRequired,
  }),
  transactionsGrid: arrayOf(shape({
    name: string.isRequired,
    className: string.isRequired,
    mapping: string.isRequired,
  })),
  actions: shape({
    requestSum: func.isRequired,
    addTransaction: func.isRequired,
  }).isRequired,
};

const mapStateToProps = pipe(path(['transactions']), pick(['transactions', 'summary', 'transactionsGrid']));

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(AppActions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(functional(App));
