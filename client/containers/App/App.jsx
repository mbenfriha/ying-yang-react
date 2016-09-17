import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TopHeader from '../../components/TopHeader/TopHeader';
import Grid from '../../components/Grid';
import TransactionForm from '../TransactionForm/TransactionForm';
import TransactionSummary from '../TransactionSummary/TransactionSummary';
import * as AppActions from '../../actions';

const { array, object } = PropTypes;

class App extends Component {
  static propTypes = {
    transactions: array,
    summary: object,
    gridFields: array,
    actions: object,
  };

  componentWillMount() {
    const { transactions, actions } = this.props;

    actions.requestSum(transactions);
  }

  render() {
    const {
      transactions,
      gridFields,
      summary,
      actions,
    } = this.props;

    return (
      <div className="viewport">
        <TopHeader addTodo={actions.addTodo} />
        <Grid fields={gridFields} data={transactions}>
          <TransactionForm action={actions.addTransaction} />
          <TransactionSummary data={summary} fields={gridFields} />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { transactions } = state;

  return {
    transactions: transactions.transactions,
    summary: transactions.summary,
    gridFields: transactions.transactionsGrid,
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
