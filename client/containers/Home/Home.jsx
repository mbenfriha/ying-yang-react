import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import functional from 'react-functional';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pick, path, pipe } from 'ramda';

import * as AppActions from '../../actions';
import TopHeader from '../../components/TopHeader/TopHeader';
import Grid from '../../components/Grid';
import TransactionForm from '../TransactionForm/TransactionForm';
import TransactionSummary from '../TransactionSummary/TransactionSummary';

const { arrayOf, shape, number, string, func } = PropTypes;

const Home = ({ transactions, summary, transactionsGrid, actions: { addTransaction } }) => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <TopHeader />
    <Grid fields={transactionsGrid} data={transactions}>
      <TransactionSummary data={summary} fields={transactionsGrid} />
    </Grid>
    <TransactionForm action={addTransaction} />
  </div>
);

Home.componentWillMount = (({ transactions, actions: { requestSum } }) => requestSum(transactions));

Home.propTypes = {
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
)(functional(Home));
