import React from 'react';
import './VacanciesList.css';
import VacancyCard from '../VacancyCard/VacancyCard.jsx';
import data from '../../core/config/data.json';

const VacanciesList = () => {
  return (
    <section className="job-openings">
      <ul className="job-openings__list">
        {data.map((item) =>
          <li key={item.id}>
            <VacancyCard card={item} />
          </li>
        )}
      </ul>
    </section>
  );
};

export default VacanciesList;
