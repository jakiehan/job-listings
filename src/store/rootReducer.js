import { combineReducers } from 'redux';
import { positionsReducer } from './positions/positionsReducer.js';
import { filtersReducer } from './filters/filtersReducer.js';

const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filtersReducer,
});

export default rootReducer;