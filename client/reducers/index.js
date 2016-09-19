import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import transactions from './transactions';

export default combineReducers({
  transactions,
  form,
});
