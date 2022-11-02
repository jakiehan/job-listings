import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from './filtersConstants.js';

const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter
})

const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter
})

const clearFilter = () => ({
  type: CLEAR_FILTER,
})

export { addFilter, removeFilter, clearFilter };