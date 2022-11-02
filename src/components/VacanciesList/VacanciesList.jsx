import React from 'react';
import './VacanciesList.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from '../../store/positions/positionsSelectors.js';
import { selectFilters } from '../../store/filters/filtersSelectors.js';
import { addFilter } from '../../store/filters/filtersActions.js';
import VacancyCard from '../VacancyCard/VacancyCard.jsx';

const VacanciesList = () => {

  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilters);

  const positions = useSelector((state) => selectVisiblePositions(state, currentFilter));

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <section className="job-openings">
      <ul className="job-openings__list">
        {positions.map((item) =>
          <li key={item.id}>
            <VacancyCard
              card={item}
              handleAddFilter={handleAddFilter}
            />
          </li>
        )}
      </ul>
    </section>
  );
};

export default VacanciesList;
