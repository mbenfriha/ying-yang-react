/* eslint fp/no-nil:0 */

import { combineReducers } from 'redux';
import { pipe, map, reject, reduce, max, inc, propEq, prop, sum } from 'ramda';

import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTION_GRID_FIELDS,
  REQUEST_SUM,
} from '../actions';

import {
  defaultTransactions,
  defaultTransactionGridFields,
  defaultSummary,
} from './defaults';

/**
 * Add a new transaction.
 * This is a helper function for the transactions reducer
 * @param {Object} state
 * @param {Object} action
 */
function addTransaction(state, action) {
  const { description, value } = action.transaction;

  const generateNextId = pipe(reduce((accum, next) => max(next.id, accum), -1), inc);

  return [
    ...state,
    {
      id: generateNextId(state),
      description,
      value,
    },
  ];
}

/**
 * Main transactions reducer
 * @param  {Object} state  Current state
 * @param  {Object} action Dispatched action
 * @return {Object}        Default state
 */
function transactions(state = defaultTransactions, action) {
  switch (action.type) {
    case ADD_TRANSACTION: {
      return addTransaction(state, action);
    }

    case DELETE_TRANSACTION: {
      return reject(propEq('id', action.id), state);
    }

    default: {
      return state;
    }
  }
}

/**
 * Intended for dynamic grid column setup
 * @param  {Object} state  Current state
 * @param  {Object} action Dispatched action
 * @return {Object}        Default state
 */
function transactionsGrid(state = defaultTransactionGridFields, action) {
  switch (action.type) {
    case GET_TRANSACTION_GRID_FIELDS: {
      return state;
    }

    default: {
      return state;
    }
  }
}

/**
 * Summary calculation
 * @param  {Object} state  Current state
 * @param  {Object} action Dispatched action
 * @return {Object}        Default state
 */
function summary(state = defaultSummary, action) {
  switch (action.type) {
    case REQUEST_SUM: {
      const round = x => Math.round(x * 100) / 100;

      const transformToSum = pipe(
        map(pipe(prop('value'), Number)),
        pipe(sum, round),
      );

      return {
        ...state,
        ...{ value: transformToSum(action.data) },
      };
    }

    default: {
      return state;
    }
  }
}

export default combineReducers({
  transactionsGrid,
  transactions,
  summary,
});
