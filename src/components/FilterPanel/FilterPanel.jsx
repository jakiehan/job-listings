import React from 'react';
import './FilterPanel.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFilter, clearFilter } from '../../store/filters/filtersActions.js';
import { selectFilters } from '../../store/filters/filtersSelectors.js';
import Stack from '../Stack/Stack.jsx';
import Badge from '../Badge/Badge.jsx';

const FilterPanel = () => {

  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  if (filters.length === 0) {
    return null;
  }

  const handleClickCloseBadge = (filter) => {
    dispatch(removeFilter(filter));
  }

  const handleClickClearFilter = () => {
    dispatch(clearFilter());
  }

  return (
    <div className="filter-panel">
      <Stack type="tools">
        {filters.map(filter =>
          <li key={filter}>
            <Badge
              type="clearable"
              onClickBadgeClose={() => handleClickCloseBadge(filter)}
            >
              {filter}
            </Badge>
          </li>
        )}
      </Stack>
      <button
        className="filter-panel__btn-clear"
        type="button"
        aria-label="Clear Button"
        onClick={handleClickClearFilter}
      >
        Clear
      </button>
    </div>
  );
};

export default FilterPanel;
