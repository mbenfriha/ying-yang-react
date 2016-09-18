import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import transactions from './transactions';

/**
 * Routing to be implemented
 */
export default combineReducers({
  transactions,
  form: formReducer,
});
