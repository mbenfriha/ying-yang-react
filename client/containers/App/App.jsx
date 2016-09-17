import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TopHeader from '../../components/TopHeader/TopHeader';
import Grid from '../../components/Grid';
import TransactionForm from '../TransactionForm/TransactionForm';
import TransactionSummary from '../TransactionSummary/TransactionSummary';
import * as AppActions from '../../actions';

const { arrayOf, shape, number, string, func } = PropTypes;

class App extends Component {
  static propTypes = {
    transactions: arrayOf(shape({
      id: number.isRequired,
      description: string.isRequired,
      value: number.isRequired,
    })),
    summary: shape({
      description: string.isRequired,
    }),
    gridFields: arrayOf(shape({
      name: string.isRequired,
      className: string.isRequired,
      mapping: string.isRequired,
    })),
    actions: shape({
      requestSum: func.isRequired,
      addTransaction: func.isRequired,
    }),
  };

  componentWillMount() {
    const { transactions, actions: { requestSum } } = this.props;

    requestSum(transactions);
  }

  render() {
    const { transactions, gridFields, summary, actions } = this.props;
    const { addTransaction } = actions;

    return (
      <div className="viewport">
        <TopHeader />
        <Grid fields={gridFields} data={transactions}>
          <TransactionForm action={addTransaction} />
          <TransactionSummary data={summary} fields={gridFields} />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { transactions: { transactions, summary, transactionsGrid: gridFields } } = state;

  return {
    transactions,
    summary,
    gridFields,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
