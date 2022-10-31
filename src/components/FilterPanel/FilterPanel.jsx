import React from 'react';
import './FilterPanel.css';
import Stack from '../Stack/Stack.jsx';
import Badge from '../Badge/Badge.jsx';

const FilterPanel = ({ children }) => {
  return (
    <div className="filter-panel">
      <Stack type="tools">
        <li>
          <Badge type="clearable">
            React
          </Badge>
        </li>
        <li>
          <Badge type="clearable">
            Frontend
          </Badge>
        </li>
        <li>
          <Badge type="clearable">
            Backend
          </Badge>
        </li>
        <li>
          <Badge type="clearable">
            Backend
          </Badge>
        </li>
        <li>
          <Badge type="clearable">
            Backend
          </Badge>
        </li>
        <li>
          <Badge type="clearable">
            Backend
          </Badge>
        </li>
      </Stack>
      <button className="filter-panel__btn-clear" type="button" aria-label="Clear Button">Clear</button>
    </div>
  );
};

export default FilterPanel;
